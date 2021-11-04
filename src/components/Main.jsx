import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Route, Switch } from 'react-router-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#e1e4e8"
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
        <Switch>
            <Route path="/" exact>
                <RepositoryList /> 
            </Route>
            <Route path="/signin" exact>
                <SignIn />
            </Route>
            <Route path="/signup" exact>
                <SignUp />
            </Route>
            <Route path="/createReview" exact>
              <CreateReview />
            </Route>
            <Route path="/:id" exact>
                <SingleRepository />
            </Route>
            </Switch>
    </View>
  );
};

export default Main;