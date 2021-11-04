import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import { useDebounce } from 'use-debounce';

import { useHistory } from 'react-router';

const styles = StyleSheet.create({
  separator: {
    marginBottom: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const KeywordText = ({ setKeywordText }) => {
  return (
    <TextInput
      onChangeText={(text) => setKeywordText(text)}
      placeholder='Search repositories'
    />
  );
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;
    return (
      <View>
        <KeywordText setKeywordText={props.setKeywordText} />
        <Picker
        selectedValue={props.orderBy}
        onValueChange={(itemValue) =>
          props.setOrderBy(itemValue)
        }
        >
        <Picker.Item label="latest" value="latest" />
        <Picker.Item label="highest rated" value="highest_rated" />
        <Picker.Item label="lowest rated" value="lowest_rated" />
        </Picker>
        </View>
    );
  };
  
  render() {
    const repositories = this.props.repositories;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        testID='repositoryItem'
        data={repositoryNodes}
        keyExtractor={({ id }) => id}
        renderItem={this.props.renderItem}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

const RepositoryList = () => {

    const [orderBy, setOrderBy] = useState('latest');
    const [keyword, setKeyword] = useState('');
    const [keywordValue] = useDebounce(keyword, 500);

    
    const { repositories, loading, fetchMore } = useRepositories(
      orderBy, 
      keyword,
      { first: 8 });
    let history = useHistory();

    const renderItem = ({ item }) => {
      return <Pressable onPress={() => history.push(`/${item.id}`)}>
          <RepositoryItem item={item} />
        </Pressable>;
      };    
      
    const onEndReach = () => {
      fetchMore();
    }

    const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];


  return (
    <RepositoryListContainer 
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      setKeywordText={setKeyword}
      renderItem={renderItem}
      onEndReach={onEndReach}
    />
      
  );
};

export default RepositoryList;