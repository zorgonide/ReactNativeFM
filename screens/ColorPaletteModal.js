import { StyleSheet, Text, View, TextInput, Switch, FlatList, Button, Alert, Pressable } from 'react-native'
import React, { useState, useCallback } from 'react'
import { COLORS } from '../assets/COLORS'



const ColorPaletteModal = ({ navigation }) => {
    const [text, onChangeText] = useState("");
    const [selectedColors, updateSelectedColors] = useState([]);

    const handleUpdate = useCallback(
        (color, newValue) => {
            if (newValue === true) {
                updateSelectedColors(current => [...current, color]);
            } else {
                updateSelectedColors(current =>
                    current.filter(c => c.colorName !== color.colorName),
                );
            }
        },
        [selectedColors, updateSelectedColors],
    );

    const SwitchPanel = ({ colorName, hexCode }) => {
        let isEnabled = !!selectedColors.find(color => color.colorName === colorName)
        return (
            <View style={styles.switchBox}>
                <Text style={styles.textLabel}>{colorName}</Text>
                <View>
                    <Switch
                        trackColor={{ false: "#767577", true: hexCode }}
                        thumbColor={isEnabled ? hexCode : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        value={isEnabled}
                        onValueChange={newValue => handleUpdate({ colorName, hexCode }, newValue)}
                    />
                </View>
            </View>
        )
    }

    const addToPalette = () => {
        if (selectedColors.length > 3 && text.length > 3) {
            let sampleColorPanel = {
                paletteName: text,
                colors: selectedColors
            }
            // updateArray(sampleColorPanel)
            navigation.navigate('Home', { newPalette: sampleColorPanel })
        }
        else if (selectedColors.length < 4)
            Alert.alert("Woops choose more colors")
        else Alert.alert("Enter color name greater than 3 characters")
    }

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
                renderItem={({ item }) => <SwitchPanel hexCode={item.hexCode} colorName={item.colorName}></SwitchPanel>}
            />
            <Pressable style={styles.button} onPress={addToPalette}>
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
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomColor: "grey",
        borderBottomWidth: 0.5,
        padding: 10
    },
    textLabel: {
        fontSize: 18,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        margin: 5,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'teal',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})