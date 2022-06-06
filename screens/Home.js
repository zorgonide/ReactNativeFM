import { SafeAreaView, RefreshControl, FlatList, Text, StyleSheet } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import HomePanels from '../components/HomePanels';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
    const [palettes, setPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const handleFetchPalettes = useCallback(async () => {
        const response = await fetch("https://color-palette-api.kadikraman.vercel.app/palettes");
        if (response.ok) {
            const palettes = await response.json();
            setPalettes(palettes);
        }
    }, []);
    useEffect(() => {
        handleFetchPalettes();
    }, []);
    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await handleFetchPalettes();
        setIsRefreshing(false);
    });
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <FlatList
                data={palettes}
                keyExtractor={item => item.paletteName}
                renderItem={({ item }) => (
                    <HomePanels
                        scheme={item.colors} navigation={navigation} name={item.paletteName}
                    />
                )}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                ListHeaderComponent={
                    <TouchableOpacity onPress={() => { navigation.navigate("Color Palette Modal", { palettes: palettes, setPalettesFunction: setPalettes }) }}>
                        <Text style={styles.addButton}>+</Text>
                    </TouchableOpacity>
                }
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    addButton: {
        fontWeight: "bold",
        fontSize: 28,
        textAlign: "right",
        marginRight: 10,
        color: "#ee6e73"
    }
})
export default Home