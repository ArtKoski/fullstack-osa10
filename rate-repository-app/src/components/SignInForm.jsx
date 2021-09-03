import React from 'react';
import FormikTextInput from './FormikTextInput';
import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';


const styles = StyleSheet.create({
    padded: {
        paddingBottom: 5,
        paddingTop: 5
    },
    container: {
        padding: 10,
        width: 300,
    },
    button: {
        padding: 3,
        backgroundColor: theme.colors.darkBG,
        borderColor: theme.colors.darkBG,
        color: "white",
        borderWidth: 1, 
        borderRadius: 6,
    }
});

const SignInForm = ( { onSubmit } ) => {
    return (
        <View style={styles.container}>
        <Text fontWeight="bold">Sign In</Text>
        <View style={styles.padded}>   
            <FormikTextInput name="username" placeholder="username" />
        </View>
        <View style={styles.padded}>
            <FormikTextInput name="password" placeholder="password" secureTextEntry />
        </View>
        <Pressable onPress={onSubmit} style={styles.button}>
            <Text style={{textAlign:'center', color:'white'}}>Sign In</Text>
        </Pressable>

        </View>
        );
};

export default SignInForm;