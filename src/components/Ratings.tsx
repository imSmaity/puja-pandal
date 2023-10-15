import {
  Image,
  ImageStyle,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface IRatings {
  ratings: number;
  numberOfRatings?: number;
  setRatings?: (rating: number) => void;
  disabled: boolean;
  containerStyle?: ViewStyle;
  starStyle?: ImageStyle;
  starContainerStyle?: ViewStyle;
}

interface IStar {
  isActive: boolean;
  onPress?: () => void;
  disabled: boolean;
  starStyle?: ImageStyle;
  starContainerStyle?: ViewStyle;
}

const Star = ({
  isActive,
  disabled,
  starStyle,
  starContainerStyle,
  onPress,
}: IStar) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      style={[
        {
          width: 20,
          padding: "5%",
          alignItems: "center",
        },
        starContainerStyle,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      {isActive ? (
        <Image
          source={require("../../assets/images/map/rate.png")}
          style={[{ width: 30, height: 30 }, starStyle]}
        />
      ) : (
        <Image
          source={require("../../assets/images/map/empty-rate.png")}
          style={[{ width: 30, height: 30 }, starStyle]}
        />
      )}
    </TouchableOpacity>
  );
};
const Ratings = ({
  ratings,
  containerStyle,
  starStyle,
  setRatings,
  starContainerStyle,
  disabled,
  numberOfRatings,
}: IRatings) => {
  return (
    <View
      style={[
        {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        },
        containerStyle,
      ]}
    >
      {disabled ? (
        <Text style={{ paddingRight: "2%", color: "#000000" }}>{ratings}</Text>
      ) : null}
      {[1, 2, 3, 4, 5].map((rate) => (
        <Star
          key={rate}
          isActive={Boolean(rate <= ratings)}
          disabled={disabled}
          onPress={() => setRatings && setRatings(rate)}
          starStyle={starStyle}
          starContainerStyle={starContainerStyle}
        />
      ))}
      {disabled ? (
        <Text
          style={{ paddingLeft: "2%", color: "#000000" }}
        >{`${numberOfRatings} Reviews`}</Text>
      ) : null}
    </View>
  );
};

export default Ratings;
