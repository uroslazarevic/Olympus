import React from "react";
import { connect } from "react-redux";

// Socket
import * as socketClient from "socket";
// Actions
import { fetchUser } from "actions";
import { getChatHistory, onSentMessage, onRoomJoin, onRoomLeave } from "actions/socket";
// Context
import { UserContext } from "components/Contexts";
// Components
import { ProfileHeader, ProfileContent } from "components";
import { PageLoader } from "components/UI";
import { Chat } from "..";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: true, socketData: {} };
  }
  componentDidMount() {
    socketClient.initSocket();
    const socket = socketClient.getSocket();
    this.setState({ pageLoader: true });
    this.props.fetchUser().then(() => this.setState({ pageLoader: false }));

    socket.on("chat_history", async (data) => {
      this.props.getChatHistory(data);
    });

    socket.on("chat_msg", (newMsg) => {
      console.log("newMsg");
      this.props.onSentMessage(newMsg);
    });

    // socket.on("chat_history", (data) => {
    //   this.props.getChatHistory(data);
    //   console.log("PROF DATA: ", data);
    //   // console.log("GET CHAT_HISTORY", data);
    // });

    // socket.on("chat_room_error", (msg) => {
    //   console.log("chat_room_error", msg);
    // });
  }

  componentDidUpdate(newPr, old) {
    console.log("new props", newPr, "old", old);
  }

  renderChats = () => {
    const {
      onRoomLeave,
      socketData: { chatRooms, chatHistories },
    } = this.props;
    if (!chatRooms) return;
    return (
      <ul className="active-chats">
        {chatRooms.map((room) => (
          <Chat room={room} chatHistory={chatHistories} onRoomLeave={onRoomLeave} />
        ))}
      </ul>
    );
  };

  render() {
    const { user, socketData, ...rest } = this.props;
    const actions = { onRoomJoin: rest.onRoomJoin, onSentMessage: rest.onSentMessage };

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
  { fetchUser, getChatHistory, onSentMessage, onRoomJoin, onRoomLeave }
)(Profile);
