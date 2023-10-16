import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import toCapitalizes from "../utils/toCapitalizes";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

interface ICardProps {
  name: string;
  image: any;
  onPress: () => void;
  style?: any;
}

const PlaceHolder = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Placeholder Animation={Fade} style={{ width: 100 }}>
        <PlaceholderLine style={{ borderRadius: 5 }} />
      </Placeholder>
    </View>
  );
};

const Card = ({ name, image, onPress }: ICardProps) => {
  const [isLoading, setIsLoading] = useState(true);

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
        <Image
          source={{ uri: image }}
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

        <Text style={{ color: "#000000", textAlign: "center" }}>
          {toCapitalizes(name)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
