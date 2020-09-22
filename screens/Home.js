import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='Go to Review' onPress={pressHandler} />
        </View>
    )
}



export default Home;
