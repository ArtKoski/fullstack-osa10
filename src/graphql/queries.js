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
          }
      }
  }
`;

export const GET_USER = gql`
query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
query repository($id: ID!){
    repository(id: $id) {
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
            }
        }     
    }
  }
`;


