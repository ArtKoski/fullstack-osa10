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

const ReviewForm = ( { onSubmit } ) => {
    return (
        <View style={styles.container}>
        <Text fontWeight="bold">Write a review</Text>
        <View style={styles.padded}>   
            <FormikTextInput name="owner" placeholder="Repository owner name" />
        </View>
        <View style={styles.padded}>
            <FormikTextInput name="repositoryName" placeholder="Repository name" />
        </View>
        <View style={styles.padded}>
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
        </View>
        <View style={styles.padded}>
            <FormikTextInput multiline name="review" placeholder="Review text" />
        </View>
        <Pressable onPress={onSubmit} style={styles.button}>
            <Text style={{textAlign:'center', color:'white'}}>Create a review</Text>
        </Pressable>

        </View>
        );
};

export default ReviewForm;