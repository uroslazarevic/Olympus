import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "actions";

import { ProfileHeader, ProfileContent } from "components";
import { PageLoader } from "components/UI";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: true };
  }
  componentWillMount() {
    this.props.fetchUser().then(() => this.setState({ pageLoader: false }));
  }

  render() {
    const { user } = this.props;
    if (this.state.pageLoader) {
      return <PageLoader />;
    }
    return (
      <div className="profile">
        <ProfileHeader user={user} />
        <ProfileContent user={user} />
      </div>
    );
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
