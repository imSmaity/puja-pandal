import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Start from "./Start";
import { store } from "./redux/store";

const App = () => {
  return (
    // <SafeAreaView>
    <Provider store={store}>
      <StatusBar backgroundColor={"#c8c8c8"} />
      <Start />
    </Provider>
    // </SafeAreaView>
  );
};

export default App;
