import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ICardProps {
  title: string;
  image: {
    source: any;
    width: number;
    height: number;
    style?: any;
  };
  onPress: () => void;
  style?: any;
}

const Card = ({ title, image, onPress }: ICardProps) => {
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
        {image.source ? (
          <Image
            source={image.source}
            width={image.width}
            height={image.height}
            style={{
              ...image.style,
              objectFit: "contain",
              margin: "0 auto"
            }}
          />
        ) : null}
        <Text style={{ color: "#000000", textAlign: "center" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
