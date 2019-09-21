import React from "react";
import { Route, Redirect } from "react-router-dom";
import decode from "jwt-decode";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!token || !refreshToken) {
    return false;
  }

  try {
    const { exp } = decode(refreshToken);
    if (exp * 1000 < Date.now()) {
      return false;
    }
  } catch (err) {
    return false;
  }
  return true;
};

const ProfileRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (checkAuth() ? <Component {...props} /> : <Redirect to="/" />)} />;
};

export default ProfileRoute;
