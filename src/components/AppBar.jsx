import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link, useHistory } from 'react-router-native';
import AppBarTab from './AppBarTab';
import { GET_USER } from '../graphql/queries';
import { useQuery, useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';


const styles = StyleSheet.create({
    flexContainer: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.darkBG,
      },
      scrollView: {
          flexDirection: "row"
      }
});

const AppBar = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    let history = useHistory();

    const { data } = useQuery(GET_USER);
    
    const loggedIn = data ? data.authorizedUser : undefined;
    console.log('user:');
    console.log(loggedIn);

    const onLogout = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
        history.push('/');
    };

    return (
        <View style={styles.flexContainer}>
            <ScrollView horizontal style={styles.scrollView}>
                <Link component={AppBarTab} to="/">
                    Repositories
                </Link>
                {(!loggedIn &&
                <Link component={AppBarTab} to="/signin">
                    Sign In
                </Link>
                )}
                {(!loggedIn &&
                <Link component={AppBarTab} to="/signup">
                    Sign Up
                </Link>
                )}
                {(loggedIn &&
                    <Link component={AppBarTab} to="/createReview">
                        Create Review
                    </Link>)}
                {(loggedIn &&
                    <Link component={AppBarTab} to="/reviews">
                        My Reviews
                    </Link>)}
                {(loggedIn &&
                
                <Link component={AppBarTab} onPress={onLogout} to="/logout">
                        Sign out
                    </Link>
                )}
            </ScrollView>
        </View>);
     };
  
export default AppBar;