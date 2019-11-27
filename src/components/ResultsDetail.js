import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ResultsDetail = ({result}) => {

    return (
        <View style={styles.container}>
            <Image 
                source={{uri: result.image_url}}
                style={styles.image}
            />
            <Text>{result.name}</Text>
            <Text>{result.rating} star, {result.review_count} review</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10
    },
    image: {
        width: 202,
        height: 120,
        borderRadius: 3,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultsDetail;