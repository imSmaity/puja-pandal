import React from "react";
import { StyleSheet } from "react-native";
import { Marker, MarkerPressEvent } from "react-native-maps";
import { ICoordinate } from "../types";

interface ILocationMarker {
  _id: string;
  coordinate: ICoordinate;
  handleMarker: (_id: string) => void;
}

const LocationMarker = ({ _id, coordinate, handleMarker }: ILocationMarker) => {
  // callbacks

  const onPress = (event: MarkerPressEvent) => {
    handleMarker(_id);
  };
  // const handleClosePress = () => bottomSheetModalRef.current.close();
  return (
    <Marker
      draggable
      coordinate={coordinate}
      onPress={onPress}
      icon={require("../../assets/images/map/maa.png")}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default LocationMarker;
