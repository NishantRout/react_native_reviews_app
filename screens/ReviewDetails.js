import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text>Review Screen</Text>
            <Button title='Back to Home' onPress={pressHandler} />
        </View>
    )
}

export default ReviewDetails;
