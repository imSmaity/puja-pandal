import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import Home from "./screens/home";
import Map from "./screens/map";
import PrivacyPolicy from "./screens/Policy";
import Api from "./api";
import DeviceInfo from "react-native-device-info";

const Start = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    DeviceInfo.getUniqueId()
      .then((id) => {
        console.log(id);
        Api.recordUser({ id }).then(console.log).catch(console.log);
      })
      .catch(console.log);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Start;
