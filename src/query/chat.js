import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      refreshToken
      userData {
        username
        id
      }
    }
  }
`;

export const REG_USER = gql`
  mutation($username: String!, $email: String!, $password: String!, $isAdmin: Boolean!) {
    register(username: $username, email: $email, password: $password, isAdmin: $isAdmin) {
      id
      username
      email
    }
  }
`;
