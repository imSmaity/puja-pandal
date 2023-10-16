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

export type MapStackParamList = {
  Home: undefined;
  Map: MapParams;
};
export type MapScreenProps = {
  navigation: NativeStackNavigationProp<MapStackParamList, "Map">; // Replace 'RootStackParamList' with your actual stack navigator's param list
};

export interface IDistrict {
  _id: string;
  name: string;
}

export interface IFeedback {
  rating: number;
  feedback: string;
}

export interface IMarker {
  _id: string;
  description: string;
  pandalName: string;
  latitude: number;
  longitude: number;
  district: IDistrict;
  feedbacks: IFeedback[];
}

export interface ICoordinate {
  latitude: number;
  longitude: number;
}
