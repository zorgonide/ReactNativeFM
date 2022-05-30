import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import SectionList from "./components/SectionList";
import ColorBox from "./components/ColorBox";
import FlatList from "./components/FlatList";
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        {/* <Text style={[styles.baseText, styles.headingText]}>Here are some panels</Text> */}
        {/* <ColorBox hexCode="#2aa198" colorName="Cyan" />
        <ColorBox hexCode="#268bd2" colorName="Blue" />
        <ColorBox hexCode="#d33682" colorName="Magenta" />
        <ColorBox hexCode="#cb4b16" colorName="Orange" /> */}
        <FlatList></FlatList>
        {/* <SectionList></SectionList> */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10
  },
  safeArea: {
    flex: 1,
    marginTop: 40
  },
  baseText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
  headingText: {
    color: "black",
    textAlign: "left",
    paddingHorizontal: 10
  }
})
export default App;

