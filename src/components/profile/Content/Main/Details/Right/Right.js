import React from "react";
import { connect } from "react-redux";

// import {
// } from "components";

const Left = props => {
  const { photos, blogs, friends, pools, favPages } = props.details;
  return <div className="right">RIGHT</div>;
};
function mapStateToProps({ user }) {
  return { details: user.mainInfo, basicInfo: user.basicInfo };
}
export default connect(
  mapStateToProps,
  null
)(Left);
