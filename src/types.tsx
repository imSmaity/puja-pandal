import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type MapParams = {
  _id: string;
  place: string;
  latitude: number;
  longitude: number;
};
export type RootStackParamList = {
  Home: undefined;
  Map: MapParams;
  Profile: undefined;
};
export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Home">; // Replace 'RootStackParamList' with your actual stack navigator's param list
};

export interface ICoordinate {
  latitude: number;
  longitude: number;
}
