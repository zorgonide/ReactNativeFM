import { StyleSheet, Text, View, TextInput, Switch, FlatList } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../assets/COLORS'

const sampleColorPanel = {
    paletteName: "Sample",
    colors: [
        { colorName: 'MediumTurquoise', hexCode: '#48D1CC' },
        { colorName: 'MediumVioletRed', hexCode: '#C71585' },
        { colorName: 'MidnightBlue', hexCode: '#191970' },
    ]
}

const SwitchPanel = ({ colorName, hexCode }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.switchBox}>
            <Text style={styles.textLabel}>{colorName}</Text>
            <View style={styles.switch}>
                <Switch
                    trackColor={{ false: "#767577", true: hexCode }}
                    thumbColor={isEnabled ? hexCode : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
        </View>
    )
}

const ColorPaletteModal = ({ route }) => {
    const updateArray = (colorPanel) => {
        route.params.setPalettesFunction(oldArray => [...oldArray, colorPanel])
    }

    const [text, onChangeText] = useState(null);
    return (
        <View>
            <TextInput
                style={[styles.input,]}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Color Name"
                keyboardType="text"
            />
            <FlatList
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <SwitchPanel hexCode={item.hexCode} colorName={item.colorName}></SwitchPanel>}
            />
        </View>
    )
}

export default ColorPaletteModal

const styles = StyleSheet.create({
    input: {
        margin: 15,
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'grey',
        padding: 10,
        fontSize: 20,
    },
    switchBox: {
        flexDirection: "row",
        display: "flex"
    },
    textLabel: {
        flex: 3,
        alignItems: "center",
        fontSize: 18,
        padding: 10
    },
    switch: {
        flex: 1,
    }
})