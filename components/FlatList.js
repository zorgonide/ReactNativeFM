import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const ColorPanel = ({ colorName, hexCode, dark }) => {
    const bgColor = {
        backgroundColor: hexCode
    }
    return (
        <View style={[styles.panel, bgColor]}>
            <Text style={dark ? styles.altText : styles.text}>{colorName}</Text>
        </View>
    );
}


const App = ({ colorList }) => {
    return (
        <FlatList
            style={{ padding: 20 }}
            data={colorList}
            keyExtractor={item => item.colorName}
            renderItem={({ item }) => <ColorPanel hexCode={item.hexCode} colorName={item.colorName} dark={parseInt(item.hexCode.replace('#', ''), 16) > 0xffffff / 1.1} />}
            ListHeaderComponent={() => <Text style={styles.altText}> Here are some panels</Text>}

        />
    );
}

const styles = StyleSheet.create({
    panel: {
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'teal',
        marginBottom: 15,
        borderRadius: 10
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    altText: {
        color: 'black',
        fontWeight: 'bold'
    },
});

export default App;