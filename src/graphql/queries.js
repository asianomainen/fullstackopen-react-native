import { gql } from '@apollo/client'

import { ALL_PAGE_INFO, REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments'

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        ...AllPageInfo
      }
    }
  }

  ${REPOSITORY_DETAILS}
  ${ALL_PAGE_INFO}
`

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryDetails
      url
    }
  }

  ${REPOSITORY_DETAILS}
`

export const GET_REPOSITORY_REVIEWS = gql`
  query ($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      id
      fullName
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          ...AllPageInfo
        }
      }
    }
  }

  ${REVIEW_DETAILS}
  ${ALL_PAGE_INFO}
`

export const GET_CURRENT_USER = gql`
  query ($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          ...AllPageInfo
        }
      }
    }
  }

  ${REVIEW_DETAILS}
  ${ALL_PAGE_INFO}
`
