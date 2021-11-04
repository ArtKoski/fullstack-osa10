import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
mutation($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
}
`;


export const CREATE_REVIEW = gql`
mutation($owner: String!, $name: String!, $rating: Int!, $review: String) {
    createReview(review: { ownerName: $owner, repositoryName: $name, rating: $rating, text: $review}) {
        id
    }
}
`;

export const CREATE_USER = gql`
mutation($username: String!, $password: String!) {
    createUser(user: { username: $username, password: $password }) {
        username
        createdAt
        id
    }
}
`;