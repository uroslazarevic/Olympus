import React from "react";
import { connect } from "react-redux";

// Socket
import * as socketClient from "socket";
// Actions
import { fetchUser } from "actions";
import { getChatHistory, onSentMessage, onRoomJoin, onRoomLeave, editMessage, deleteMessage } from "actions/socket";
// Context
import { UserContext } from "components/Contexts";
// Components
import { ProfileHeader, ProfileContent, Chat } from "components";
import { PageLoader } from "components/UI";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: true, socketData: {}, showOptions: false };
  }

  componentDidMount() {
    const refreshToken = localStorage.getItem("token");
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

    socket.on("signin", (data) => console.log("DATA", data));

    socket.on("check_signin", () => {
      console.log("check_signin");
      socket.emit("signin", refreshToken);
    });
  }

  renderChats = () => {
    const {
      onRoomLeave,
      editMessage,
      deleteMessage,
      socketData: { chatRooms, chatHistories },
    } = this.props;
    if (!chatRooms) return;
    return (
      <ul className="active-chats">
        {chatRooms.map((room) => (
          <Chat
            room={room}
            chatHistory={chatHistories}
            onRoomLeave={onRoomLeave}
            editMessage={editMessage}
            deleteMessage={deleteMessage}
          />
        ))}
      </ul>
    );
  };

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
      <div className="profile">
        {this.renderChats()}
        <UserContext.Provider value={{ user, chatRoomsData: [], actions }}>
          <ProfileHeader user={user} />
          <ProfileContent />
        </UserContext.Provider>
      </div>
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
  { fetchUser, getChatHistory, onSentMessage, onRoomJoin, onRoomLeave, editMessage, deleteMessage }
)(Profile);
