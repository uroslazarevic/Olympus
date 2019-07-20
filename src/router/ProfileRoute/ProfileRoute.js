import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const ProfileRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (rest.signedIn ? <Component {...props} /> : <Redirect to="/" />)} />
);

function mapStateToProps({ auth }) {
  return { signedIn: auth.signedIn };
}

export default connect(
  mapStateToProps,
  null
)(ProfileRoute);
