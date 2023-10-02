import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "./components";
import Start from "./Start";

const App = () => {
  return (
    // <SafeAreaView>
    <>
      <StatusBar backgroundColor={"#b8b5b5"} />
      <Start />
    </>
    // </SafeAreaView>
  );
};

export default App;
