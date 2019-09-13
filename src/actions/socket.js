// import * as socketClient from "socket";

import { SEND_MSG, GET_CHAT_HISTORY } from "./types";

export const onSentMessage = (socket) => {
  //   return {
  //     type: SEND_MSG,
  //     payload: msg,
  //   };
};

export const getChatHistory = (data) => {
  console.log("GET CHAT_HISTORY", data);
  return {
    type: GET_CHAT_HISTORY,
    payload: data,
  };
};
