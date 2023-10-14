import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import toCapitalizes from "../utils/toCapitalizes";

interface ICardProps {
  name: string;
  image: any;
  onPress: () => void;
  style?: any;
}

const Card = ({ name, image, onPress }: ICardProps) => {
  return (
    <View
      style={{
        padding: 8,
        backgroundColor: "#ffff",
        shadowColor: "#000000",
        elevation: 4,
        borderRadius: 4,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          elevation: 10,
        }}
      >
        {/* {imageUrl ? (
          <Image
            source={imageUrl}
            width={10}
            height={10}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              objectFit: "contain",
              margin: 0,
            }}
          />
        ) : null} */}
        <Text style={{ color: "#000000", textAlign: "center" }}>
          {toCapitalizes(name)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
