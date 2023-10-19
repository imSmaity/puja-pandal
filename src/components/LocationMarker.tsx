import React, { useCallback, useMemo, useRef } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { ICoordinate } from "../types";
import { Marker, MarkerPressEvent } from "react-native-maps";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Api from "../api";

interface ILocationMarker {
  _id: string;
  coordinate: ICoordinate;
  handleMarker: (_id: string) => void;
}

const LocationMarker = ({ _id, coordinate, handleMarker }: ILocationMarker) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

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
      pinColor="red"
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
