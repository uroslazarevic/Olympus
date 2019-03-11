import React from "react";
import { Router, Route } from "react-router-dom";
import history from "utilis/history";

import { ProfileRoute } from "router";
import { Login, Profile } from "components";

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={Login} />
        <ProfileRoute path="/profile" component={Profile} />
      </div>
    </Router>
  );
};

export default AppRouter;
