import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React from "react"

interface IButton {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  children?: React.ReactNode
}

const Button = ({
  containerStyle,
  style,
  textStyle,
  label,
  onPress,
  children
}: IButton) => {

  return (
    <View style={containerStyle}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[
          {
            backgroundColor: "#0696FF",
            borderRadius: 5,
            padding: "5%",
          },
          style
        ]}
      >
        {
          children
        }
      </TouchableOpacity>
    </View>
  );
};

export default Button;
