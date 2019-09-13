import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";

import "./App.css";

import AppRouter from "router/AppRouter";

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

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    // console.log("operation", operation.getContext());
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
  cache: new InMemoryCache(),
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
};
