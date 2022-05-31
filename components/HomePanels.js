import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const Item = ({ title, colorCode }) => {
    const bgColor = {
        backgroundColor: colorCode
    }
    return (
        <View style={[styles.panelItem, bgColor]} />
    )
};
const HomePanels = ({ scheme, navigation, name }) => {
    const renderItem = ({ item }) => {
        return <Item title={item.colorName} colorCode={item.hexCode} />
    };
    let previewScheme = scheme.slice(0, 5)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('ColorPalette', { paletteName: name, colors: scheme })}>
                <Text style={{ marginRight: 20, fontSize: 16, fontWeight: "400", textAlign: "right" }}>{name}</Text>
                <FlatList
                    contentContainerStyle={{ justifyContent: "space-around", flex: 1, marginVertical: 20 }}
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
        // margin: 20,
        borderRadius: 20,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.3,
        // shadowRadius: 1,
        elevation: 2,
    }
})


export default HomePanels