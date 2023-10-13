import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchDistrict, mapSelector } from "./redux/map/mapSlice";
import Home from "./screens/home";
import Map from "./screens/map";
import Profile from "./screens/profile";
import Api from "./api";
import { IMap } from "./redux/map/types";

const Start = () => {
  const Stack = createNativeStackNavigator();
  const select = useAppSelector(mapSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    Api.getDistrict()
      .then((data: IMap) => {
        // console.log(data);
        dispatch(fetchDistrict(data));
      })
      .catch(console.log);
  }, []);

  console.log("Districts ", select.districts);
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
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Start;
