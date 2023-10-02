import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Map: undefined;
  Profile: undefined;
};
export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">; // Replace 'RootStackParamList' with your actual stack navigator's param list
};
