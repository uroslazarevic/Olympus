import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { history } from "utilis";
import { ProfileRoute } from "router";
import { Login, Profile, NotFound, Settings } from "components";

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProfileRoute exact path="/profile" component={Profile} />
        <Route exact path="/profile/settings" component={Settings} />
        <Route path="/not-found" component={NotFound} />
        <Redirect path="*" to="/not-found" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
