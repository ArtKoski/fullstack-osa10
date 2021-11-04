import React from 'react';
import { Image, View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import * as Linking from 'expo-linking';

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
  },
  buttonBg: {
    backgroundColor: '#0366d6',
    borderWidth: 1, 
    borderRadius: 5,
    alignContent: "center",
    padding: 5,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold"
  }
});

const RepositoryItem = ( { item, showButton } ) => {

  const handlePress = () => {
    Linking.openURL(item.url);
  };

  return (
      <View testID="repositoryItem" style={styles.item}>
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
        {( showButton &&
        <View>
          <Pressable style={styles.buttonBg} onPress={handlePress}>
            <Text style={styles.buttonText}>open github page</Text></Pressable>
        </View>
        )}
     </View>
  );
};

export default RepositoryItem;