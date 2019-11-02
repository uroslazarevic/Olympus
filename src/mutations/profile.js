import gql from "graphql-tag";

export const CREATE_BIOFACT = gql`
  mutation($topic: String!, $content: String!) {
    createBioFact(topic: $topic, content: $content) {
      id
      userId
      topic
      content
    }
  }
`;

export const DELETE_BIOFACTS = gql`
  mutation($ids: [Int!]!) {
    deleteBioFacts(ids: $ids)
  }
`;

export const UPDATE_BIOFACT = gql`
  mutation($id: ID!, $topic: String!, $content: String!) {
    updateBioFact(id: $id, topic: $topic, content: $content) {
      id
      topic
      content
      userId
    }
  }
`;
