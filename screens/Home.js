import { View, Text, TouchableOpacity, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import React from 'react'

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
const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
];

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ColorPalette', { paletteName: 'Solarized', colors: COLORS })}>
                    <HomePanels scheme={COLORS} navigation={navigation} name='Solarized' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ColorPalette', { paletteName: 'Solarized', colors: RAINBOW })}>
                    <HomePanels scheme={RAINBOW} navigation={navigation} name='Rainbow' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ColorPalette', { paletteName: 'Solarized', colors: FRONTEND_MASTERS })}>
                    <HomePanels scheme={FRONTEND_MASTERS} navigation={navigation} name='Frontend Masters' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const Item = ({ title, colorCode }) => {
    const bgColor = {
        backgroundColor: colorCode
    }
    return (
        <View style={[styles.panelItem, bgColor]}>

        </View>
    )
};
const HomePanels = ({ scheme, navigation, name }) => {
    let count = 0;
    const renderItem = ({ item }) => {
        count++;
        if (count < 6)
            return (
                <Item title={item.colorName} colorCode={item.hexCode} />
            )
    };
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ColorPalette', { paletteName: name, colors: scheme })}>
                <Text style={{ marginLeft: 20, fontSize: 15 }}>{name}</Text>
                <FlatList
                    contentContainerStyle={{ justifyContent: "space-around" }}
                    data={scheme}
                    renderItem={renderItem}
                    keyExtractor={item => item.colorName}
                    horizontal={true}
                />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    panelItem: {
        padding: 20,
        margin: 20,
        borderRadius: 20,
    }
})

export default Home