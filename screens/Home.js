import { SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import HomePanels from '../components/HomePanels';

const Home = ({ navigation }) => {
    const [palettes, setPalettes] = useState([]);
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
            />
        </SafeAreaView>
    )
}

export default Home