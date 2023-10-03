import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/home";
import Profile from "./screens/profile";
import Map from "./screens/map";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Map as TMap, fetchMap, mapSelector } from "./redux/map/mapSlice";

const Start = () => {
  const Stack = createNativeStackNavigator();
  const select = useAppSelector(mapSelector);
  const dispatch = useAppDispatch();
  console.log(select);
  useEffect(() => {
    dispatch(fetchMap({ id: "20" }));
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
        <Stack.Screen name="Map" component={Map} options={{}} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Start;
