import gql from "graphql-tag";

export const postQuery = gql`
  query posts {
    posts(orderBy: dateAndTime_DESC) {
      id
      slug
      title
      tags
      subTitle
      dateAndTime
      author {
        id
        name
        avatar {
          id
          handle
        }
      }
      coverImage {
        id
        handle
      }
      blurImage {
        id
        handle
      }
      content {
        html
      }
    }
  }
`;

export const postTwoQuery = gql`
  query sosts {
    sosts(orderBy: dateAndTime_DESC) {
      id
      slug
      title
      tags
      subTitle
      dateAndTime
      author {
        id
        name
        avatar {
          id
          handle
        }
      }
      coverImage {
        id
        handle
      }
      blurImage {
        id
        handle
      }
      content {
        html
      }
    }
  }
`;

export const sostsQuery = gql`
  query allSociety {
    allSocieties {
      id
      slug
      title
      name
      color {
        hex
      }
      imageOne {
        id
        handle
      }
      content {
        html
      }
    }
  }
`;

export const allSocietysQuery = gql`
  query society {
    societies {
      id
      slug
      title
      name
      color {
        hex
      }
      imageOne {
        id
        handle
      }
      content {
        html
      }
    }
  }
`;

export const reminderQuery = gql`
  query reminders {
    reminders {
      id
      slug
      title
      duration
      author {
        id
        name
        avatar {
          id
          handle
        }
      }
      coverImage {
        id
        handle
      }
      blurImage {
        id
        handle
      }
      content {
        html
      }
    }
  }
`;
