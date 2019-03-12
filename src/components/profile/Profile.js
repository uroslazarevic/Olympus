import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "actions";

import { ProfileHeader } from "components";

class Profile extends React.Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const { user } = this.props;
    if (user.basicInfo) {
      return (
        <div className="profile">
          <ProfileHeader user={user} />
        </div>
      );
    }
    return <div>Loading...</div>;
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
