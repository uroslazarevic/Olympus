import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import { history } from "utilis";
import { ProfileRoute } from "router";
import { Login, Profile, NotFound } from "components";

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <ProfileRoute exact path="/" path="/profile" component={Profile} />
          <Route path="/not-found" component={NotFound} />
          <Redirect path="*" to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
