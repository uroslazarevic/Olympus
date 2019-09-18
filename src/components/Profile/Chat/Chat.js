import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import mainInfo from "data/mainInfo";
import * as socketClient from "socket";
import { Avatar as FriendAvatar } from "components/UI";
import { ChatMessage } from "components";

const friendData = mainInfo.friends.list[0];

export const Chat = ({ room, chatHistory, onRoomLeave, editMessage, deleteMessage }) => {
  const socket = socketClient.getSocket();
  const [messages, setMessages] = useState([]);
  const [chatMsg, setChatMsg] = useState("");
  const [editedMsgId, setEditedMsgId] = useState(null);

  const userData = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("refreshToken");

  useEffect(() => {
    const data = {
      userData: { username: userData.username, token },
      roomName: room,
    };
    socket.emit("chat_room", data);
  }, []);

  useEffect(() => {
    setMessages(chatHistory[room]);
  }, [chatHistory]);

  const sendMsg = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!chatMsg.trim()) return;
    const msgData = {
      msg: {
        text: chatMsg.trim(),
        from: userData.username,
      },
      token,
      roomName: room,
    };
    if (editedMsgId) {
      // Create edited message
      const updDate = moment(Date.now()).format("h:mm a");
      const editedMsg = { ...msgData, msg: { ...msgData.msg, id: editedMsgId, date: updDate } };
      // Update chat history
      editMessage(editedMsg, socket);
      setEditedMsgId(null);
      return setChatMsg("");
    }
    socket.emit("chat_msg", msgData);
    setChatMsg("");
  };

  const onEditMessage = (msg) => {
    console.log("msg", msg);
    setEditedMsgId(msg.id);
    setChatMsg(msg.text);
  };

  const onKeyCombo = (e) => {
    if (e.shiftKey && e.keyCode === 13 && !chatMsg.trim()) {
      return setChatMsg("");
    }
    // shift+enter
    if (e.shiftKey && e.keyCode === 13) sendMsg();
  };

  const RoomLeave = () => {
    onRoomLeave(room, socket);
  };

  return (
    <li className="chat-box">
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
        <span onClick={RoomLeave} className="remove">
          &times;
        </span>
      </div>
      <div className="content">
        {messages &&
          messages.map((msg) => <ChatMessage msg={msg} username={userData.username} onEditMessage={onEditMessage} />)}
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
    </li>
  );
};
