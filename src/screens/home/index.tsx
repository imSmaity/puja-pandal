import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card } from "../../components";
import { HomeScreenProps } from "../../types";
import { districtGroupList } from "../../utils/data";
import { getRandomId } from "../../utils/helper";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchDistrict, mapSelector } from "../../redux/map/mapSlice";
import { IDistrict } from "../../redux/map/types";
import getSimplifyDistricts from "../../utils/getSimplifyDistricts";
import Api from "../../api";

const RenderCards = ({ data, navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        gap: 8,
      }}
    >
      {data.item.map((location: IDistrict) => (
        <Card
          name={location.name}
          image={location.image}
          onPress={() => {
            navigation.navigate("Map", {
              _id: location._id,
              place: location.name,
              latitude: location.latitude,
              longitude: location.longitude,
            });
          }}
          key={location._id}
        />
      ))}
    </View>
  );
};

const Home = ({ navigation }: HomeScreenProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const select = useAppSelector(mapSelector);

  const dispatch = useAppDispatch();
  useEffect(() => {
    setLoading(true);
    Api.getDistrict()
      .then((districts: any) => {
        const SimplifyDistricts = getSimplifyDistricts(districts.data);
        dispatch(fetchDistrict(SimplifyDistricts));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("'Error' indicates that something went wrong.");
      });
  }, []);

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
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            horizontal
            data={select.districts}
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
        )}
      </View>
      <TouchableOpacity
        style={{ paddingTop: loading ? "80%" : 0 }}
        onPress={() => navigation.navigate("PrivacyPolicy")}
      >
        <Text
          style={{
            textAlign: "center",
            textDecorationLine: "underline",
            color: "#bbbbbb",
          }}
        >
          Privacy Policy
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: { backgroundColor: "#ffffff", height: "100%" },
  text: { color: "#000000" },
});
