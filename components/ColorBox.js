import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
    const boxColor = {
        backgroundColor: hexCode,
    };
    return (
        <View style={[styles.box, boxColor]}>
            <Text style={styles.boxText}>
                {colorName}: {hexCode}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
        marginHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10
    },
    boxText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ColorBox;