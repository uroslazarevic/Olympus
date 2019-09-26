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
export const ALL_USERS = gql`
  query Users {
    allUsers {
      id
      name
      pseudonym
      avatar
    }
  }
`;
