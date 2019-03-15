import React from "react";
import { connect } from "react-redux";

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
          imgSrc={user.basicInfo.picture.thumbnail}
          className="user-avatar"
          badge={{
            badgePosition: "small small-tl",
            status: "bg-primary"
          }}
        />
        <div className="user-details">
          <div className="initials">
            <div className="fullname">
              {user.basicInfo.name.first} {user.basicInfo.name.last}
            </div>
            <div className="pseudonym">{user.mainInfo.pseudonym}</div>
          </div>
          {showUserOptList && (
            <ul className="user-options-list">
              <li onClick={signOut} className="user-option">
                Sign out
              </li>
              <li className="user-option">Something else</li>
              <li className="user-option">Something else</li>
            </ul>
          )}
          <span
            onClick={this.handleUserOptionsList}
            className={`user-options ${showUserOptList && "active-item"}`}
          >
            {showUserOptList ? (
              <i className="fas fa-angle-up" />
            ) : (
              <i className="fas fa-chevron-down" />
            )}
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
