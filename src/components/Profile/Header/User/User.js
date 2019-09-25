import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signOut } from "actions";
import { Avatar as UserAvatar } from "components/UI";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showUserOptList: false };
  }

  handleUserOptionsList = () => {
    this.setState({ showUserOptList: !this.state.showUserOptList });
  };

  render() {
    const { user, signOut } = this.props;
    const { showUserOptList } = this.state;
    return (
      <div className="user">
        <UserAvatar
          imgSrc={`data:image/jpeg;base64,${user.mainInfo.avatar}`}
          className="user-avatar"
          badge={{
            badgePosition: "small small-tl",
            status: "bg-primary",
          }}
        />
        <div className="user-details">
          <div className="initials">
            <div className="fullname">{user.mainInfo.name}</div>
            <div className="pseudonym">{user.mainInfo.pseudonym}</div>
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
      </div>
    );
  }
}

export default connect(
  null,
  { signOut }
)(User);
