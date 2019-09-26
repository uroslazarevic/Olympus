import gql from "graphql-tag";

export const GET_CHAT_HISTORY = gql`
  {
      chatHistory($room: String!) {
        id
        chatHistory {
          id
          from
          text
          date
        }
      }
  }
`;
