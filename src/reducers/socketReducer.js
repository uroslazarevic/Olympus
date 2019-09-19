import _ from "lodash";
import { GET_CHAT_HISTORY, SEND_MSG, JOIN_ROOM, LEAVE_ROOM, EDIT_MESSAGE, DELETE_MESSAGE } from "actions/types";

const initialState = {
  chatHistories: {},
  chatRooms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT_HISTORY: {
      const { id, chatHistory } = action.payload;
      console.log("action.payload", action.payload);
      return { ...state, chatHistories: { ...state.chatHistories, [id]: chatHistory } };
    }

    case SEND_MSG: {
      const { room } = action.payload;
      // Logic for dummy users
      if (!state.chatHistories[room]) {
        return { ...state, chatHistories: { ...state.chatHistories, [room]: [action.payload] } };
      }
      // Logic for registered users
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
      return { chatHistories, chatRooms };
    }

    case EDIT_MESSAGE:
    case DELETE_MESSAGE: {
      const { room, history } = action.payload;
      return { ...state, chatHistories: { ...state.chatHistories, [room]: history } };
    }
    default:
      return state;
  }
};
