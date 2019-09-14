import socketIOClient from "socket.io-client";

import { getChatHistory, onSentMessage } from "actions/socket";

let socket = null;

const initSocket = () => {
  const token = localStorage.getItem("refreshToken");

  socket = socketIOClient.connect(process.env.REACT_APP_SOCKET_SERVER, {
    query: { token },
  });
  socket.on("connected", (msg) => console.log(msg));

  socket.on("chat_room_error", (msg) => {
    console.log("chat_room_error", msg);
  });

  // socket.on("chat_history", (data) => {
  //   getChatHistory(data);
  // });

  // socket.on("chat_msg", (newMsg) => {
  //   onSentMessage(newMsg);
  // });
};

const getSocket = () => socket;

export { initSocket, getSocket };
