import gql from "graphql-tag";

export const ALL_USERS = gql`
  query Users {
    allUsers {
      id
      profileSettings {
        name
        pseudonym
        avatar
        city
        country
      }
    }
  }
`;

export const GET_SETTINGS = gql`
  query profileSettings {
    getProfileSettings {
      id
      name
      pseudonym
      avatar
      city
      country
    }
  }
`;
