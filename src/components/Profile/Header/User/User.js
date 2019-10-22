import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signOut } from "actions";
import { Avatar as UserAvatar } from "components/UI";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showUserOptList: false, switchBtn: true };
  }

  handleUserOptionsList = () => {
    this.setState({ showUserOptList: !this.state.showUserOptList });
  };

  render() {
    const { user, signOut } = this.props;
    const { showUserOptList, switchBtn } = this.state;

    return (
      <div className="user">
        <UserAvatar
          imgSrc={`data:image/jpeg;base64,${user.profileSettings.avatar}`}
          className="user-avatar"
          badge={{
            badgePosition: "small small-tl",
            status: "bg-primary",
          }}
        />
        <div className="user-details">
          <div className="initials">
            <div className="fullname">{user.profileSettings.name}</div>
            <div className="pseudonym">{user.profileSettings.pseudonym}</div>
          </div>
          {showUserOptList && (
            <ul className="user-options-list">
              <li onClick={signOut} className="user-option">
                Sign out
              </li>
              <li className="user-option">
                <Link
                  to={{
                    pathname: "/profile/settings",
                    state: {
                      id: JSON.parse(localStorage.getItem("userData")).id,
                    },
                  }}
                >
                  Settings
                </Link>
              </li>
            </ul>
          )}
          <span onClick={this.handleUserOptionsList} className={`user-options ${showUserOptList && "active-item"}`}>
            {showUserOptList ? <i className="fas fa-angle-up" /> : <i className="fas fa-chevron-down" />}
          </span>
        </div>
        {/* Rounded switch  */}
        <label className="switch" htmlFor="switch" onClick={(e) => this.setState({ switchBtn: !switchBtn })}>
          <input type="checkbox" checked={switchBtn} onChange={() => {}} />
          <span className="slider round"></span>
        </label>
        <div className={`users-online-notification ${!switchBtn ? "notification-off" : "notification-on"}`}>
          Users online: {this.props.onlineUsers}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ socketData }) {
  return {
    onlineUsers: socketData.onlineUsers,
  };
}

export default connect(
  mapStateToProps,
  { signOut }
)(User);
