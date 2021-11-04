import React from "react"
import { GET_USER } from '../graphql/queries';
import Text from "./Text"
import SingleReview from './SingleReview'
import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';



const styles = StyleSheet.create({
    separator: {
      marginBottom: 10,
    },
  });
  
const ReviewItem = ({ review }) => {
    return <SingleReview review={review} ownReviews />
};


const ItemSeparator = () => <View style={styles.separator} />;

const UserReviews = ( {  } ) => {

    const { data, loading } = useQuery(GET_USER, 
        { fetchPolicy: 'cache-and-network', 
        variables: { includeReviews: true }});

    if(loading) {
        return<Text>loading</Text>
    }

    const reviews = data.authorizedUser?.reviews
    const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

    //console.log('nodes : ',reviewNodes)

    return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
      />
    );
  };
  
  export default UserReviews;