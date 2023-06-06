import { gql } from '@apollo/client';
import { REPO_PARTS } from './fragments';

export const GET_REPOSITORIES = gql`
${REPO_PARTS}
query GET_REPOSITORIES($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
    edges {
      node {
        ...RepoParts       
      }
      cursor
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
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

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repository {
              id
              fullName
            }
          }
        }
      }
    }
  }
`;

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