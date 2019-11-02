import gql from "graphql-tag";

export const PROFILE_DATA = gql`
  query profileData {
    profileData {
      userPhotos {
        id
        photoable
        base64
        photoableId
      }

      profileIntro {
        id
        topic
        content
      }

      twitterFeed {
        id
        text
        tags
        createdAt
      }

      friends {
        count
        list {
          id
          avatar
        }
      }

      friendshipRequests {
        userId
        friendIds
      }

      blogPosts {
        id
        topic
        text
        createdAt
      }

      latestVideos {
        id
        title
        description
        videoRecord {
          videoCode
        }
      }

      authorPosts {
        id
        title
        description
        type
        createdAt
        likes {
          count
          list
        }
        shares
        comments {
          list
          likes {
            count
            list
          }
          replies {
            list
            likes {
              count
              list
            }
          }
        }
        ... on VideoPost {
          id
          videoLink {
            videoCode
          }
        }
        ... on ImagePost {
          id
          imageLink {
            base64
          }
        }
      }
    }
  }
`;

export const LOCAL_PROFILE_DATA = gql`
  query profileData {
    profileData @client
  }
`;
