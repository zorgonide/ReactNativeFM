import { View, Text } from 'react-native'
import React from 'react'
import FlatList from '../components/FlatList.js'



const ColorPalette = ({ route }) => {
    return (
        <FlatList colorList={route.params.colors} paletteName={route.params.paletteName} />
    )
}

export default ColorPalette