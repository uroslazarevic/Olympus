import { GET_CHAT_HISTORY, SEND_MSG } from "actions/types";

const initialState = {
  chatHistories: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAT_HISTORY:
      const { id, chatHistory } = action.payload[0];
      return { chatHistories: { ...state.chatHistories, [id]: chatHistory } };

    default:
      return state;
  }
};
