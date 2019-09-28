import _ from "lodash";
import {
  GET_CHAT_HISTORY,
  SEND_MSG,
  JOIN_ROOM,
  LEAVE_ROOM,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  ONLINE_USERS,
} from "actions/types";

const initialState = {
  chatHistories: {},
  chatRooms: [],
  activeUsers: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT_HISTORY: {
      const { id, chatHistory } = action.payload;
      return { ...state, chatHistories: { ...state.chatHistories, [id]: chatHistory } };
    }

    case SEND_MSG: {
      const { room } = action.payload;
      // Client joined in friends room and recieves msg in chat with oposite room name
      const isMyRoom = `${room.split("-")[1]}-${room.split("-")[0]}`;
      if (state.chatRooms.find((r) => r === isMyRoom)) {
        const updChatRoom = [...state.chatHistories[isMyRoom]];
        updChatRoom.push(action.payload);
        return { ...state, chatHistories: { ...state.chatHistories, [isMyRoom]: updChatRoom } };
      }

      // When client has closed chat, but recieves a message
      if (!state.chatHistories[room] && !state.chatRooms.find((r) => r === room)) {
        return { ...state };
      }

      // Client initializing chat history with welcome message
      if (!state.chatHistories[room] && state.chatRooms.find((r) => r === room)) {
        return { ...state, chatHistories: { ...state.chatHistories, [room]: [action.payload] } };
      }

      // Client updating chat history
      const updChatRoom = [...state.chatHistories[room]];
      updChatRoom.push(action.payload);
      return { ...state, chatHistories: { ...state.chatHistories, [room]: updChatRoom } };
    }

    case JOIN_ROOM: {
      const found = state.chatRooms.find((room) => room === action.payload);
      if (found) return { ...state };
      return { ...state, chatRooms: [...state.chatRooms, action.payload] };
    }

    case LEAVE_ROOM: {
      const chatRooms = state.chatRooms.filter((room) => room !== action.payload);
      const chatHistories = _.omit(state.chatHistories, [action.payload]);
      return { ...state, chatHistories, chatRooms };
    }

    case EDIT_MESSAGE:
    case DELETE_MESSAGE: {
      const { room, history } = action.payload;
      return { ...state, chatHistories: { ...state.chatHistories, [room]: history } };
    }

    case ONLINE_USERS: {
      return { ...state, onlineUsers: action.payload };
    }

    default:
      return state;
  }
};
