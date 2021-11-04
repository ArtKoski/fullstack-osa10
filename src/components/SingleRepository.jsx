import React from "react"
import { useParams } from "react-router"
import RepositoryItem from "./RepositoryItem"
import useRepository from "../hooks/useRepository"
import Text from "./Text"
import SingleReview from './SingleReview'
import { FlatList, View, StyleSheet, Pressable } from 'react-native';


const styles = StyleSheet.create({
    separator: {
      marginTop: 10
    },
  });

const RepositoryInfo = ({ repository }) => {
    return <RepositoryItem item={repository} showButton />
};
  
  const ReviewItem = ({ review }) => {
    return <SingleReview review={review} />
  };
  
  const ItemSeparator = () => <View style={styles.separator} />;

  const SingleRepository = () => {
    const { id } = useParams();
    const { repository, loading, fetchMore } = useRepository(id, 
      { first: 4 });

    const onEndReach = () => {
      console.log('loading more')
      fetchMore();
    }

    if(loading || !repository) {
        return<Text>loading</Text>
    }

    const reviews = repository?.reviews
    const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

    return (
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id} //???
        ListHeaderComponent={() => (
        <View>
            <RepositoryInfo repository={repository} />
            <Text fontWeight='bold' style={{padding: 4, marginLeft:5}}>reviews</Text> 
        </View> )}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  };
  
  export default SingleRepository;