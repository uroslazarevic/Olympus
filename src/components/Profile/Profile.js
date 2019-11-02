import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Query } from "react-apollo";

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
            <CSSTransition key={room} timeout={350} classNames="chat">
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

  updateProfileData() {}

  render() {
    const { user, socketData, ...rest } = this.props;
    const actions = {
      onRoomJoin: rest.onRoomJoin,
      onSentMessage: rest.onSentMessage,
    };

    if (this.state.pageLoader) {
      return <PageLoader />;
    }

    return (
      <Query query={ALL_USERS}>
        {({ loading: allUsersLoading, error: allUsersError, data: allUsersData, refetch: refetchAllUsers }) => {
          if (allUsersLoading) return <PageLoader />;
          if (allUsersError) return `Error! ${allUsersError.message}`;
          refetchAllUsers();
          return (
            <Query query={PROFILE_DATA}>
              {({ loading: profileDataLoading, error: profileDataError, data: profileDataData }) => {
                if (profileDataLoading) return <PageLoader />;
                if (profileDataError) return `Error! ${profileDataError.message}`;

                const friends = allUsersData.allUsers.filter((user) => user.id !== this.state.userId);
                const me = allUsersData.allUsers.find((user) => user.id === this.state.userId);
                const combinedUserData = { me, profileData: profileDataData.profileData };
                return (
                  <div className="profile">
                    {this.renderChats(friends)}
                    <UserContext.Provider
                      value={{
                        user: combinedUserData,
                        friends,
                        chatRoomsData: [],
                        actions,
                        posts: user,
                      }}
                    >
                      <ProfileHeader user={me} />
                      <ProfileContent />
                    </UserContext.Provider>
                  </div>
                );
              }}
            </Query>
          );
        }}
      </Query>
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
