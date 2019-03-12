import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "actions";

class Profile extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return <div>Profile</div>;
  }
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(Profile);
