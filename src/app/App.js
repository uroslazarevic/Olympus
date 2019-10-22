import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { ApolloLink, concat } from "apollo-link";

import "./App.css";

import AppRouter from "router/AppRouter";
import introspectionQueryResultData from "fragmentTypes.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const { createUploadLink } = require("apollo-upload-client");
const authMiddleware = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  const authHeaders = {
    "x-token": token,
    "x-refresh-token": refreshToken,
  };
  // add the authorization to the headers
  operation.setContext({
    headers: {
      ...authHeaders,
    },
  });

  return forward(operation);
});

const httpLink = new createUploadLink({
  uri: `${process.env.REACT_APP_EXPRESS_SERVER}/graphql`,
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const {
      response: { headers },
    } = context;

    if (headers) {
      const token = headers.get("x-token");
      const refreshToken = headers.get("x-refresh-token");

      // console.log("afterwareLink token: ", token);
      // console.log("afterwareLink refreshToken: ", refreshToken);

      if (token) {
        localStorage.setItem("token", token);
      }
      if (refreshToken) {
        localStorage.setItem("refreshToken", refreshToken);
      }
    }

    return response;
  });
});

const client = new ApolloClient({
  link: afterwareLink.concat(concat(authMiddleware, httpLink)),
  cache: new InMemoryCache({ fragmentMatcher }),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
};
