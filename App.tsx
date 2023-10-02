import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={style.container}>
        <Text style={style.text}>Durga Maa</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  container: {backgroundColor: '#ffffff', height: '100%'},
  text: {color: '#000000'},
});
