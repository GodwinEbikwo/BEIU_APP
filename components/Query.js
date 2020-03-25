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
  query societys {
    societies {
      id
      slug
      title
      name
      content {
        html
      }
      color {
        hex
      }
      imageOne {
        id
        handle
      }
    }
  }
`;

export const allSocietysQuery = gql`
  query allSocietys {
    allSocieties {
      id
      color {
        hex
      }
      content {
        raw
        html
      }
      title
      slug
      name
      imageOne {
        id
        handle
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
