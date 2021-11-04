import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    tab: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 8,
    }
});

const AppBarTab = ( {onPress, ...props } ) => {
    return (
        <Pressable onPress={onPress} 
                style={styles.tab}>
                    <Text color='textSecondary' 
                        fontWeight='bold'>
                            {props.children}
                    </Text>
            </Pressable>
    );
};

export default AppBarTab;