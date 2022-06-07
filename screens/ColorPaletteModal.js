import { StyleSheet, Text, View, TextInput, Switch, FlatList, Button, Alert, Pressable } from 'react-native'
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

const SwitchPanel = ({ colorName, hexCode, updateSelectedColors, selectedColors }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if (isEnabled) {
            updateSelectedColors(oldArray => [...oldArray, { colorName: colorName, hexCode: hexCode }])
        }
        else {
            // remove element from array
            updateSelectedColors(selectedColors.filter(element => element.colorName != colorName))
        }
    };
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
    const addToPalette = () => {
        if (selectedColors.length > 3 && text.length > 3) {
            let sampleColorPanel = {
                paletteName: text,
                colors: selectedColors
            }
            updateArray(sampleColorPanel)
        }
        else Alert.alert("woops")
    }
    const [text, onChangeText] = useState(null);
    const [selectedColors, updateSelectedColors] = useState([]);
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={[styles.input,]}
                onChangeText={onChangeText}
                value={text}
                placeholder="Enter Color Name"
                keyboardType="default"
            />
            <FlatList
                data={COLORS}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <SwitchPanel hexCode={item.hexCode} colorName={item.colorName} updateSelectedColors={updateSelectedColors} selectedColors={selectedColors}></SwitchPanel>}
            />
            <Pressable style={styles.button} onPress={() => { Alert.alert("Woooo") }}>
                <Text style={styles.text}>Add to Palette</Text>
            </Pressable>
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
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        margin: 5,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#9ACD',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})