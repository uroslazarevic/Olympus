import gql from "graphql-tag";

export const GET_ME = gql`
  query Me($id: Int!) {
    me(id: $id) {
      name
      pseudonym
      avatar
    }
  }
`;
