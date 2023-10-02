import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Card } from "../../components";
import { HomeScreenProps } from "../../types";

const Home = ({ navigation }: HomeScreenProps) => {
  const locations = [
    {
      id: "1",
      title: "Paschim Medinipur",
      image: {
        source: "../assets/images/l1.png",
        width: 10,
        height: 10,
        style: { width: "40%", height: "40%", resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "2",
      title: "Paschim Medinipur",
      image: {
        source: "../../../assets/images/l1.png",
        width: 10,
        height: 10,
        style: { width: "40%", height: "40%", resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "3",
      title: "Paschim Medinipur",
      image: {
        source: "../../../assets/images/l1.png",
        width: 10,
        height: 10,
        style: { width: "40%", height: "40%", resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
  ];
  return (
    <View style={style.container}>
      <View
        style={{
          alignItems: "center",
          padding: "5%",
        }}
      >
        <Image
          source={require("../../../assets/images/pujo.png")}
          width={10}
          height={10}
          style={{
            width: "100%",
            height: "58%",
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={{ color: "#33363FB0", fontSize: 16, textAlign: "center" }}>
        WHAT’S PANDAL ON YOUR MIND?
      </Text>
      {locations.map((location) => (
        <Card
          key={location.id}
          title={location.title}
          image={location.image}
          onPress={location.onPress}
        />
      ))}
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: { backgroundColor: "#ffffff", height: "100%" },
  text: { color: "#000000" },
});
