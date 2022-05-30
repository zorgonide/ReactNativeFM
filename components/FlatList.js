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

const COLORS = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
];

const App = () => {
    return (
        <FlatList
            style={{ padding: 20 }}
            data={COLORS}
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