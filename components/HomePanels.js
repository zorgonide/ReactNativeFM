import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

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
    const renderItem = ({ item }) => {
        return <Item title={item.colorName} colorCode={item.hexCode} />
    };
    let previewScheme = scheme.slice(0, 6)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ColorPalette', { paletteName: name, colors: scheme })}>
                <Text style={{ marginLeft: 20, fontSize: 15 }}>{name}</Text>
                <FlatList
                    contentContainerStyle={{ justifyContent: "space-around" }}
                    data={previewScheme}
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


export default HomePanels