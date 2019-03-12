import React, { Component } from "react";
import logo from "imgs/olympus_logo.png";

import { SearchBar, SocialNotifications, User } from "components";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.user);
    const { basicInfo, mainInfo } = this.props.user;
    return (
      <header className="profile-header">
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="page-name">Profile page</div>
        <SearchBar />
        <div className="find-friends">Find Friends</div>
        <SocialNotifications />
        <User />
      </header>
    );
  }
}

export default ProfileHeader;
