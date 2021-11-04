import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({
    review: {
      padding: 8,
      backgroundColor: "white"
    },
    flexContainerHorizontal: {
        display: 'flex',
        flexDirection: 'row'
      },
      flexContainerVertical: {
        display: 'flex',
        flexDirection: 'column',
        padding: 8
      },    
      reviewText: {
        paddingHorizontal: 5,
      },
      ratingText: {
        color: '#0366d6',
        fontWeight: 'bold'
      },
      ratingContainer: {
        borderWidth: 1.5, 
        borderRadius: 20,    
        padding: 5,
        alignSelf: "center",
        borderColor: '#0366d6',
        color: '#0366d6',
      }
});

const SingleReview = ( {review, ownReviews} ) => {

    const createdAt = review.createdAt.substring(0,10)
    return(

    <View testID="rewiewItem" style={styles.review}>
        <View style={styles.flexContainerHorizontal}>
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>{review.rating}</Text>
            </View>
            <View style={styles.flexContainerVertical}>
                <View>
                    {!ownReviews &&
                    <Text fontWeight="bold">{review.user.username}</Text>
                    }
                    {ownReviews &&
                    <Text fontWeight="bold">{review.repository.fullName}</Text>
                    }
                </View>
                <View>
                    <Text>{createdAt}</Text>
                </View>
                </View>
        </View>
        <View style={styles.flexContainerHorizontal}>
            <View style={styles.reviewText}>
                    <Text>{review.text}</Text>
            </View>
        </View>
    </View>
    )
}

export default SingleReview

