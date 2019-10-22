import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Query } from "react-apollo";
import { adopt } from "react-adopt";

// Queries
import { ALL_USERS } from "queries/auth";
import { PROFILE_DATA } from "queries/profile";
// Socket
import * as socketClient from "socket";
// Actions
import { fetchUser } from "actions";
import {
  getChatHistory,
  onSentMessage,
  onRoomJoin,
  onRoomLeave,
  editMessage,
  deleteMessage,
  updOnlineUsers,
} from "actions/socket";
// Context
import { UserContext } from "components/Contexts";
// Components
import { ProfileHeader, ProfileContent, Chat } from "components";
import { PageLoader } from "components/UI";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: true, socketData: {}, showOptions: false, userId: null };
  }

  componentDidMount() {
    const refreshToken = localStorage.getItem("token");
    const userId = JSON.parse(localStorage.getItem("userData")).id;
    this.setState({ userId });
    socketClient.initSocket();
    const socket = socketClient.getSocket();
    this.setState({ pageLoader: true });
    this.props.fetchUser().then(() => this.setState({ pageLoader: false }));

    socket.emit("signin", refreshToken);

    socket.on("chat_history", async (data) => {
      this.props.getChatHistory(data);
    });

    socket.on("send_msg", (newMsg) => {
      console.log("newMsg", newMsg);
      this.props.onSentMessage(newMsg);
    });

    socket.on("signin", (data) => this.props.updOnlineUsers(data));

    socket.on("check_signin", () => {
      console.log("check_signin");
      socket.emit("signin", refreshToken);
    });
  }

  renderChats = (friends) => {
    const {
      onRoomLeave,
      editMessage,
      deleteMessage,
      socketData: { chatRooms, chatHistories },
    } = this.props;
    if (!chatRooms) return;

    return (
      <TransitionGroup component="ul" className="active-chats">
        {chatRooms.map((room) => {
          const friendData = friends.find((fr) => fr.id === Number(room.split("-")[1]));
          friendData.badgeColor = "bg-success";
          return (
            <CSSTransition key={room} timeout={350} classNames="item">
              <Chat
                room={room}
                friendData={friendData}
                chatHistory={chatHistories}
                onRoomLeave={onRoomLeave}
                editMessage={editMessage}
                deleteMessage={deleteMessage}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  };

  render() {
    const Composed = adopt({
      allUsersQuery: ({ render }) => (
        <Query query={ALL_USERS} variables={{ id: this.state.userId }}>
          {render}
        </Query>
      ),
      profileDataQuery: ({ render }) => <Query query={PROFILE_DATA}>{render}</Query>,
    });
    const { user, socketData, ...rest } = this.props;
    const actions = {
      onRoomJoin: rest.onRoomJoin,
      onSentMessage: rest.onSentMessage,
    };

    if (this.state.pageLoader) {
      return <PageLoader />;
    }

    return (
      <Composed>
        {({ allUsersQuery, profileDataQuery }) => {
          if (allUsersQuery.loading || profileDataQuery.loading) return <PageLoader />;
          if (allUsersQuery.error || profileDataQuery.error)
            return `Error! ${allUsersQuery.error.message || profileDataQuery.error.message}`;
          // Refetch data due to redirect
          allUsersQuery.refetch();
          const friends = allUsersQuery.data.allUsers.filter((user) => user.id !== this.state.userId);
          const me = allUsersQuery.data.allUsers.find((user) => user.id === this.state.userId);
          const combinedUserData = { me, profileData: profileDataQuery.data.profileData };
          return (
            <div className="profile">
              {this.renderChats(friends)}
              <UserContext.Provider
                value={{ user: combinedUserData, friends, chatRoomsData: [], actions, posts: user }}
              >
                <ProfileHeader user={me} />
                <ProfileContent />
              </UserContext.Provider>
            </div>
          );
        }}
      </Composed>
    );
  }
}

function mapStateToProps({ user, socketData }) {
  return {
    user,
    socketData,
  };
}

export default connect(
  mapStateToProps,
  { fetchUser, getChatHistory, onSentMessage, onRoomJoin, onRoomLeave, editMessage, deleteMessage, updOnlineUsers }
)(Profile);
