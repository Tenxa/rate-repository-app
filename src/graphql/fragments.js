import { gql } from '@apollo/client';

export const CORE_REPOSITORY_FIELDS = gql`
  fragment CoreRepositoryFields on Repository {
    id,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl
  }
`;
/* 
export const PAGEINFO_FIELDS = gql`
  fragment PageInfoFields on PageInfo {
    hasNextPage,
    startCursor,
    endCursor
  }
`; */

export const REVIEW_NODE_FIELDS = gql`
  fragment ReviewNodeFields on Review {
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
`;