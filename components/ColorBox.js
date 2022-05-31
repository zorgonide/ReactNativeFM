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
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    boxText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ColorBox;