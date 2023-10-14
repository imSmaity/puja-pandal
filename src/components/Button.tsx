import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface IButton {
  label: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button = ({
  containerStyle,
  style,
  textStyle,
  label,
  onPress,
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
          style,
        ]}
      >
        <Text
          style={[
            {
              color: "#ffffff",
              textAlign: "center",
              fontSize: 16,
            },
            textStyle,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
