import { SafeAreaView, ScrollView } from 'react-native'
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

    const panelList = palettes.map((data) => {
        return (
            <HomePanels scheme={data.colors} navigation={navigation} name={data.paletteName} />
        )
    })
    return (
        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
            <ScrollView>
                {panelList}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home