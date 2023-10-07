import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Home: undefined;
  Map: { place: string };
  Profile: undefined;
};
export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">; // Replace 'RootStackParamList' with your actual stack navigator's param list
};
