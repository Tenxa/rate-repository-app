import { gql } from '@apollo/client';

export const AUTHORIZE_USER = gql`
  mutation Authorize ($credentials: AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview ($review: CreateReviewInput!) {
    createReview(review: $review) {
      repositoryId
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser ($user: CreateUserInput!) {
    createUser(user: $user) {
      id,
      createdAt
    }
  }
`;