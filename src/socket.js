import socketIOClient from "socket.io-client";

let socket = null;

const initSocket = () => {
  const token = localStorage.getItem("refreshToken");

  socket = socketIOClient.connect(process.env.REACT_APP_SOCKET_SERVER, {
    query: { token },
  });
  socket.on("connected", (msg) => console.log(msg));

  socket.on("join_room_error", (msg) => {
    console.log("join_room_error", msg);
  });
};

const getSocket = () => socket;

export { initSocket, getSocket };
