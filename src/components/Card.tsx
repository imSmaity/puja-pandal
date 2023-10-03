import React from "react";
import {
  Image,
  ImageStyle,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
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
    <View style={{ padding: "2%", paddingLeft: "3.5%", paddingRight: "1%" }}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {image.source ? (
          <Image
            source={image.source}
            width={image.width}
            height={image.height}
            style={image.style}
          />
        ) : null}
        <Text style={{ color: "#000000", textAlign: "center" }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
