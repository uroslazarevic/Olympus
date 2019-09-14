// import * as socketClient from "socket";

import { SEND_MSG, GET_CHAT_HISTORY, JOIN_ROOM, LEAVE_ROOM } from "./types";

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
  const chat = { room, history: getState().socketData.chatHistories[room] };
  socket.emit("leave_chat", chat);
  dispatch({ type: LEAVE_ROOM, payload: room });
};
