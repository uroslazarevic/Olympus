import React, { useState, useEffect } from "react";
import mainInfo from "data/mainInfo";
import * as socketClient from "socket";
import { Avatar as FriendAvatar } from "components/UI";
import uuidv4 from "uuid/v4";

const initialMessages = [
  { text: "Hello", date: "danas", from: "you", id: "12312313" },
  { text: "Hello2", date: "danas2", from: "friend", id: "12312314" },
  { text: "Hello", date: "danas", from: "you", id: "12312315" },
  { text: "Hello2", date: "danas2", from: "friend", id: "12312316" },
];
export const Chat = ({ socketData }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [chatMsg, setChatMsg] = useState("");
  const [loadChat, setLoadChat] = useState(false);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const friendId = 2;
  const room = `${userData.id}-${friendId}`;
  const socket = socketClient.getSocket();
  const friendData = mainInfo.friends.list[0];
  useEffect(() => {
    console.log("chatHistory", socketData.chatHistories);
    const chatHistory = socketData.chatHistories[room];
    // setMessages(socketData.chatHistories[room]);

    // socket.on("chat_msg", (newMsg) => {
    //   console.log("messages", newMsg);
    // });
  }, [socketData.chatHistories]);

  const sendMsg = () => {
    if (!chatMsg.trim()) return;
    const token = localStorage.getItem("refreshToken");
    const msg = {
      text: chatMsg.trim(),
      userData: { username: userData.username, token },
      friendId,
      id: uuidv4(),
    };
    socket.emit("chat_room", msg);
    setChatMsg("");
    setLoadChat(true);
  };

  const onKeyCombo = (e) => {
    if (e.shiftKey && e.keyCode === 13 && !chatMsg.trim()) {
      return setChatMsg("");
    }
    // shift+enter
    if (e.shiftKey && e.keyCode === 13) sendMsg();
  };

  return (
    <form className="chat-box">
      <div className="header">
        <FriendAvatar
          imgSrc={friendData.src}
          badge={{
            badgePosition: "small small-tl",
            status: friendData.badgeColor,
          }}
          className="friend-avatar"
        />
        <div className="friend">
          <div className="fullname">{friendData.name}</div>
          {friendData.badgeColor === "bg-success" && <div className={`status active`}>Active now</div>}
          {friendData.badgeColor !== "bg-success" && <div className={`status inactive`}>Inactive</div>}
        </div>
        <span className="remove">&times;</span>
      </div>
      <div className="content">
        {messages &&
          messages.map((msg) => {
            return (
              <div key={msg.id} className={`message ${msg.from}`}>
                <div className="msg-content">
                  <div className="text">{msg.text}</div>
                  <div className="date">{msg.date}</div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="send-msg">
        <span onClick={sendMsg}>
          <i className="fas fa-bolt"></i>
        </span>
        <textarea
          cols="10"
          rows="3"
          wrap="soft"
          value={chatMsg}
          maxLength="200"
          onKeyDown={onKeyCombo}
          onChange={(e) => setChatMsg(e.target.value)}
          type="text"
          placeholder="Write message..."
        />
      </div>
    </form>
  );
};
