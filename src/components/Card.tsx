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
    source: string;
    width: number;
    height: number;
    style?: any;
  };
  onPress: () => void;
  style?: any;
}

const Card = ({ title, image, onPress }: ICardProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Image
          source={require("../../assets/images/l1.png")}
          width={image.width}
          height={image.height}
          style={image.style}
        />
        <Text style={{ color: "#000000" }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
