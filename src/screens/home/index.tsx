import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Card } from "../../components";
import { HomeScreenProps } from "../../types";

const Home = ({ navigation }: HomeScreenProps) => {
  const col1 = [
    {
      id: "1",
      title: "Alipurduar",
      image: {
        source: require("../../../assets/images/l1.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "2",
      title: "Bankura",
      image: {
        source: require("../../../assets/images/l2.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "3",
      title: "Birbhum",
      image: {
        source: require("../../../assets/images/l3.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "4",
      title: "Cooch Behar",
      image: {
        source: require("../../../assets/images/l4.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "5",
      title: "Dakshin Dinajpur",
      image: {
        source: require("../../../assets/images/l5.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "6",
      title: "Darjeeling",
      image: {
        source: require("../../../assets/images/l6.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "7",
      title: "Hooghly",
      image: {
        source: require("../../../assets/images/l7.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "8",
      title: "Howrah",
      image: {
        source: require("../../../assets/images/l8.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "9",
      title: "Jalpaiguri",
      image: {
        source: require("../../../assets/images/l9.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "10",
      title: "Jhargram",
      image: {
        source: require("../../../assets/images/l10.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "11",
      title: "Kalimpong",
      image: {
        source: require("../../../assets/images/l11.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
  ];
  const col2 = [
    {
      id: "1",
      title: "Kolkata",
      image: {
        source: require("../../../assets/images/l12.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "2",
      title: "Malda",
      image: {
        source: require("../../../assets/images/l13.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "3",
      title: "Murshidabad",
      image: {
        source: require("../../../assets/images/l14.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "4",
      title: "Nadia",
      image: {
        source: require("../../../assets/images/l15.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "5",
      title: "North 24 Parganas",
      image: {
        source: require("../../../assets/images/l16.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "6",
      title: "Paschim Bardhaman",
      image: {
        source: require("../../../assets/images/l17.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "7",
      title: "Paschim Medinipur",
      image: {
        source: require("../../../assets/images/l18.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "8",
      title: "Purba Bardhaman",
      image: {
        source: require("../../../assets/images/l19.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "9",
      title: "Purba Medinipur",
      image: {
        source: require("../../../assets/images/l20.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "10",
      title: "Purulia",
      image: {
        source: require("../../../assets/images/l21.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "11",
      title: "South 24 Parganas",
      image: {
        source: require("../../../assets/images/l22.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
      },
      onPress: () => navigation.navigate("Map"),
    },
    {
      id: "12",
      title: "Uttar Dinajpur",
      image: {
        source: require("../../../assets/images/l23.png"),
        width: 10,
        height: 10,
        style: { width: 100, height: 100, resizeMode: "contain" },
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
            height: 220,
            borderRadius: 10,
          }}
        />
      </View>
      <Text
        style={{
          color: "#33363FB0",
          fontSize: 16,
          textAlign: "center",
          marginTop: "15%",
        }}
      >
        WHAT’S PANDAL ON YOUR MIND?
      </Text>
      <View style={{ paddingBottom: "5%", paddingTop: "3%" }}>
        <FlatList
          horizontal
          data={col1}
          keyExtractor={(location) => location.id}
          renderItem={(location) => (
            <Card
              title={location.item.title}
              image={location.item.image}
              onPress={location.item.onPress}
            />
          )}
          contentContainerStyle={{ paddingRight: "145%" }}
        />
      </View>
      <View style={{ paddingBottom: "5%", paddingTop: "3%" }}>
        <FlatList
          horizontal
          data={col2}
          keyExtractor={(location) => location.id}
          renderItem={(location) => (
            <Card
              key={location.item.id}
              title={location.item.title}
              image={location.item.image}
              onPress={location.item.onPress}
            />
          )}
          contentContainerStyle={{ paddingRight: "185%" }}
        />
      </View>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: { backgroundColor: "#ffffff", height: "100%" },
  text: { color: "#000000" },
});
