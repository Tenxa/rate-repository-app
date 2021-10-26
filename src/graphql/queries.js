import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS, REVIEW_NODE_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
${CORE_REPOSITORY_FIELDS}
  query repositories (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
    ) {
    repositories (
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
      ) {
        pageInfo {
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            ...CoreRepositoryFields
          }
        }
    }
  }
`;

export const GET_USER = gql`
${REVIEW_NODE_FIELDS}
query getAuthorizedUser($includeReviews: Boolean = false) {
  authorizedUser {
    # user fields...
    reviews @include(if: $includeReviews) {
      edges {
        node {
          ...ReviewNodeFields
          repository {
            ownerName
            fullName
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
}
`;

/* export const GET_USER_REVIEWS = gql`

query authorizedUser (
  $first: Int
  $after: String
  ) {
  authorizedUser {
    reviews (
      first: $first
      after: $after
      ){
      edges {
        node {
          ...ReviewNodeFields
        }
        cursor
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
}
`; */

export const GET_REPOSITORY_BY_ID = gql`
${CORE_REPOSITORY_FIELDS}
  query repository(
    $id: ID!
    $first: Int
    $after: String
    ) {
    repository(id: $id) {
      ...CoreRepositoryFields
      url
      reviews (
        first: $first
        after: $after
        ) {
        edges {
          node {
            id
            text
            rating
            createdAt
            repositoryId
            user {
              id
              username
            }
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
  }
`;