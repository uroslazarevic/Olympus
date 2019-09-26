import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import uuidV4 from "uuid/v4";

// Socket
import * as socketClient from "socket";

// Components
import { Avatar as FriendAvatar } from "components/UI";
import { ChatMessage } from "components";

export const Chat = ({ room, chatHistory, onRoomLeave, editMessage, deleteMessage, friendData }) => {
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
    socket.emit("join_room", data);
  }, []);

  useEffect(() => {
    setMessages(chatHistory[room]);
  }, [chatHistory]);

  const sendMsg = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!chatMsg.trim()) return;
    const msgData = {
      msg: {
        date: Date.now(),
        from: userData.username,
        text: chatMsg.trim(),
        id: uuidV4(),
        room,
      },
      token,
    };
    if (editedMsgId) {
      // Create edited message
      const editedMsgData = { ...msgData, msg: { ...msgData.msg, id: editedMsgId, room } };
      // Update chat history
      editMessage(editedMsgData, socket);
      setEditedMsgId(null);
      return setChatMsg("");
    }
    socket.emit("send_msg", msgData);
    setChatMsg("");
  };

  const onCancelEditMessage = () => {
    setEditedMsgId(null);
    setChatMsg("");
  };

  const onEditMessage = (msg) => {
    setEditedMsgId(msg.id);
    setChatMsg(msg.text);
  };

  const onDeleteMessage = (msg, deleteFor) => {
    onCancelEditMessage();
    const delMsgData = { msg: { ...msg, room }, token, deleteFor };
    deleteMessage(delMsgData, socket);
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
          imgSrc={`data:image/jpeg;base64,${friendData.avatar}`}
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
          messages.map((msg) => (
            <ChatMessage
              msg={msg}
              username={userData.username}
              onEditMessage={onEditMessage}
              onDeleteMessage={onDeleteMessage}
            />
          ))}
      </div>
      <div className="send-msg">
        <CSSTransition in={editedMsgId} timeout={300} classNames="fade-edit" unmountOnExit>
          <div onClick={onCancelEditMessage} className="edit-msg-info">
            Edit message <span>&times;</span>
          </div>
        </CSSTransition>
        <span className="send-btn" onClick={sendMsg}>
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
