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

export const editMessage = (editedMsgData, socket) => (dispatch, getState) => {
  const history = [...getState().socketData.chatHistories[editedMsgData.msg.room]];
  const newHistory = history.map((msg) => {
    if (msg.id === editedMsgData.msg.id) {
      msg.text = editedMsgData.msg.text;
      msg.date = editedMsgData.msg.date;
    }
    return msg;
  });
  const chat = {
    room: editedMsgData.msg.room,
    history: newHistory,
    token: editedMsgData.token,
    editedMsg: editedMsgData.msg,
  };
  socket.emit("edit_message", chat);
  dispatch({ type: EDIT_MESSAGE, payload: chat });
};

export const deleteMessage = (msg, socket) => (dispatch, getState) => {
  const history = [...getState().socketData.chatHistories[msg.room]];
  const newHistory = history.filter((m) => m.id !== msg.id);
  const chat = { room: msg.room, history: newHistory, token: msg.token, deletedMsg: msg };
  socket.emit("delete_message", { chat, deleteFor: msg.deleteFor });
  dispatch({ type: DELETE_MESSAGE, payload: chat });
};
