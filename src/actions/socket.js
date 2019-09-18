// import * as socketClient from "socket";

import { SEND_MSG, GET_CHAT_HISTORY, JOIN_ROOM, LEAVE_ROOM, EDIT_MESSAGE, DELETE_MESSAGE } from "./types";

export const onSentMessage = (newMsg) => {
  return {
    type: SEND_MSG,
    payload: newMsg,
  };
};

export const getChatHistory = (data) => {
  return {
    type: GET_CHAT_HISTORY,
    payload: data,
  };
};

export const onRoomJoin = (room) => {
  return {
    type: JOIN_ROOM,
    payload: room,
  };
};

export const onRoomLeave = (room, socket) => (dispatch, getState) => {
  const chat = { room, history: [...getState().socketData.chatHistories[room]] };
  socket.emit("leave_chat", chat);
  dispatch({ type: LEAVE_ROOM, payload: room });
};

export const editMessage = (editedMsg, socket) => (dispatch, getState) => {
  const history = [...getState().socketData.chatHistories[editedMsg.roomName]];
  const newHistory = history.map((msg) => {
    if (msg.id === editedMsg.msg.id) {
      msg.text = editedMsg.msg.text;
      msg.date = editedMsg.msg.date;
    }
    return msg;
  });
  const chat = { room: editedMsg.roomName, history: newHistory, token: editedMsg.token };
  socket.emit("edit_message", chat);
  dispatch({ type: EDIT_MESSAGE, payload: chat });
};

export const deleteMessage = (room, socket) => (dispatch, getState) => {
  const chat = { room, history: getState().socketData.chatHistories[room] };
  // socket.emit("edit_message", msg);
  // dispatch({ type: DELETE_MESSAGE, payload: room });
};
