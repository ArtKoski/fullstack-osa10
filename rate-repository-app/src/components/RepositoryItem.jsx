import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  item: {
    padding: 8,
    backgroundColor: "white"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  flexContainerHorizontal: {
    display: 'flex',
    flexDirection: 'row',
    padding: 8,
    width: "80%"
  },

  flexContainerHorizontalExtra: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    padding: 8,
    width: "80%"
  },
  flexContainerVertical: {
    display: 'flex',
    flexDirection: 'column',
    padding: 6
  },
  tagTextBackground: {
    borderWidth: 1, 
    borderRadius: 10,
    borderColor: 'blue',
    alignSelf: 'flex-end',
    padding: 3,
    backgroundColor: '#0366d6',
    color: "white"
  }
});

const RepositoryItem = ( { item } ) => {
  return (
      <View style={styles.item}>
        <View style={styles.flexContainerHorizontal}>
            <Image source={{uri: item.ownerAvatarUrl}} style={styles.tinyLogo}/>
            <View style={styles.flexContainerVertical}>
                <Text fontWeight="bold">{item.fullName}</Text>
                <Text>{item.description}</Text>
            </View>
        </View>
        <View style={styles.flexContainerHorizontal}>
            <Text style={styles.tagTextBackground}>{item.language}</Text>     
        </View>
<View style={styles.flexContainerHorizontalExtra}>
    <View style={styles.flexContainerVertical}>
        <Text fontWeight="bold">{item.stargazersCount}</Text>
        <Text>Stars</Text>
    </View>
    <View style={styles.flexContainerVertical}>
        <Text fontWeight="bold">{item.forksCount}</Text>
        <Text>Forks</Text>
    </View>
    <View style={styles.flexContainerVertical}>
        <Text fontWeight="bold">{item.reviewCount}</Text>
        <Text>Reviews</Text>
    </View>
    <View style={styles.flexContainerVertical}>
        <Text fontWeight="bold">{item.ratingAverage}</Text>
        <Text>Rating</Text>
    </View>
</View>
     </View>
  );
};

export default RepositoryItem;