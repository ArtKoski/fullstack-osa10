import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query repositories($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String){
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      edges { 
          node{ 
            fullName
            description
            ratingAverage
            reviewCount
            stargazersCount
            forksCount
            language
            ownerAvatarUrl
            id
            url
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

export const GET_USER = gql`
query authorizedUser($includeReviews: Boolean = false) {
    authorizedUser {
      id
      username
      reviews @include(if: $includeReviews) {
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
            repository {
              fullName
            }
          }
      }
    }
  }
}
`;

export const GET_REPOSITORY = gql`
query repository($id: ID!){
    repository(id: $id) {
        fullName
        description
        ratingAverage
        reviewCount
        stargazersCount
        forksCount
        language
        ownerAvatarUrl
        id
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


