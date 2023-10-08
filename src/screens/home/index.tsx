import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Card } from "../../components";
import { HomeScreenProps } from "../../types";
import { districtGroupList } from "../../utils/data";
import { getRandomId } from "../../utils/helper";

const RenderCards = ({ data, navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 8,
      }}
    >
      {data.item.map((location: any) => (
        <Card
          title={location.title}
          image={location.image}
          onPress={() => navigation.navigate("Map", { place: location.title })}
        />
      ))}
    </View>
  );
};

const Home = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={style.container}>
      <View
        style={{
          alignItems: "center",
          padding: "5%",
          height: "40%",
        }}
      >
        <Image
          source={require("../../../assets/images/pujo.png")}
          width={10}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          paddingLeft: 20,
          paddingRight: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 1,
            flex: 1,
            backgroundColor: "#F1F6F9",
          }}
        ></View>
        <Text
          style={{
            color: "#33363FB0",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Chose a district to Explore
        </Text>
        <View
          style={{
            height: 1,
            flex: 1,
            backgroundColor: "#F1F6F9",
          }}
        ></View>
      </View>

      <View style={{ paddingBottom: "5%", paddingTop: "3%" }}>
        <FlatList
          horizontal
          data={districtGroupList}
          renderItem={(item) => (
            <RenderCards
              key={getRandomId()}
              data={item}
              navigation={navigation}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
            paddingTop: 10,
            overflow: "scroll",
            gap: 8,
            paddingLeft: 10,
            paddingRight: 10,
          }}
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
