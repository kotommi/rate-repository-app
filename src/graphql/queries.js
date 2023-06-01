import { gql } from '@apollo/client';
import { REPO_PARTS } from './fragments';

export const GET_REPOSITORIES = gql`
${REPO_PARTS}
query Repositories {
    repositories {
      edges {
        node {
          ...RepoParts
        }
      }
    }
  }
`;

export const ME_SIGNED = gql`
query Me{
  me {
    id
    username
  }
}
`

export const GET_REPOSITORY = gql`
${REPO_PARTS}
query REPO($id: ID!) {
  repository(id: $id) {
    ...RepoParts
  }
}
`

export const GET_REVIEWS = gql`
query GET_REVIEWS($id: ID!) {
  repository(id: $id) {
    id
    fullName
    reviews {
      edges{
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
}
`

// other queries...