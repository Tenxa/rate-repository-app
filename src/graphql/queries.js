import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
${CORE_REPOSITORY_FIELDS}
  query repositories (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    ) {
    repositories (
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      ) {
      edges {
        node {
          ...CoreRepositoryFields
        }
      }
    }
  }
`;

export const GET_USER = gql`
  {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
${CORE_REPOSITORY_FIELDS}
  query repository($id: ID!) {
    repository(id: $id) {
      ...CoreRepositoryFields
      url
      reviews {
        edges {
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
`;