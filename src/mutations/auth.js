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
      user {
        name
        pseudonym
        avatar
      }
    }
  }
`;

export const REG_USER = gql`
  mutation($username: String!, $email: String!, $password: String!, $isAdmin: Boolean!) {
    register(username: $username, email: $email, password: $password, isAdmin: $isAdmin) {
      id
    }
  }
`;

export const FILE_UPLOAD = gql`
  mutation fileUpload($file: Upload!, $id: Int!) {
    fileUpload(file: $file, id: $id) {
      filename
    }
  }
`;

export const PROFILE_SETTINGS = gql`
  mutation profileSettings($name: String!, $pseudonym: String!, $id: Int!) {
    profileSettings(name: $name, pseudonym: $pseudonym, id: $id)
  }
`;
