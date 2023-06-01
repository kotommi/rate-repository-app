import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query Repositories {
    repositories {
      edges {
        node {
          fullName,
          description,
          language,
          stargazersCount,
          forksCount,
          reviewCount,
          ratingAverage,
          ownerAvatarUrl
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
query REPO($id: ID!) {
  repository(id: $id) {
    id
    fullName
    url
  }
}
`

// other queries...