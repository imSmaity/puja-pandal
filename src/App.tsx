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
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    // <SafeAreaView>
    <Provider store={store}>
      <StatusBar backgroundColor={"#b8b5b5"} />
      <Start />
    </Provider>
    // </SafeAreaView>
  );
};

export default App;
