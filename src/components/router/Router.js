import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Login, Profile } from "components";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
};

export default Router;
