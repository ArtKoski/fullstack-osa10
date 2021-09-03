import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';

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
    return (
        <View style={styles.flexContainer}>
            <ScrollView horizontal style={styles.scrollView}>
                <Link component={AppBarTab} to="/">
                    Repositories
                </Link>
                <Link component={AppBarTab} to="/signin">
                    Sign In
                </Link>
            </ScrollView>
        </View>);
     };
  
export default AppBar;