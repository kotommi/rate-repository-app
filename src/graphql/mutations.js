import { gql } from '@apollo/client';

export const SIGN_IN = gql`
mutation SignIn($credentials: AuthenticateInput!){
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation CreateReview($review: CreateReviewInput!){
  createReview(review: $review) {
    createdAt
  }
}
`;

export const SIGN_UP = gql`
mutation createUser($user: CreateUserInput) {
  createUser(user: $user) {
    username
  }
}
`;