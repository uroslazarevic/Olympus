import React from "react";
import { connect } from "react-redux";

// Socket
import * as socketClient from "socket";
// Actions
import { fetchUser } from "actions";
import { getChatHistory } from "actions/socket";
// Context
import { UserContext } from "components/Contexts";
// Components
import { ProfileHeader, ProfileContent } from "components";
import { PageLoader } from "components/UI";
import { Chat } from "..";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pageLoader: true };
  }
  componentWillMount() {
    // this.props.fetchUser().then(() => this.setState({ pageLoader: false }));

    socketClient.initSocket();
    const socket = socketClient.getSocket();

    // socket.on("chat_history", (data) => {
    //   this.props.getChatHistory(data);
    //   console.log("PROF DATA: ", data);
    //   // console.log("GET CHAT_HISTORY", data);
    // });

    socket.on("chat_room_error", (msg) => {
      console.log("chat_room_error", msg);
    });
  }

  render() {
    const { user, socketData } = this.props;
    // if (this.state.pageLoader) {
    //   return <PageLoader />;
    // }
    return (
      <div className="profile">
        <Chat socketData={socketData} />
        {/* <UserContext.Provider value={user, socketData}>
          <ProfileHeader user={user} />
          <ProfileContent />
       </UserContext.Provider> */}
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
  { fetchUser, getChatHistory }
)(Profile);
