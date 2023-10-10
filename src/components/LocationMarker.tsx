import React, { useCallback, useMemo, useRef } from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import { ICoordinate } from "../types";
import { Marker, MarkerPressEvent } from "react-native-maps";
import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";

interface ILocationMarker {
  id: string;
  coordinate: ICoordinate;
  handleMarker: (id: string) => void;
  title: string;
  description: string;
}

const LocationMarker = ({
  id,
  coordinate,
  handleMarker,
  title,
  description,
}: ILocationMarker) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks

  const onPress = (event: MarkerPressEvent) => {
    // handleMarker(id);
  };
  // const handleClosePress = () => bottomSheetModalRef.current.close();
  return (
    <>
      <Marker draggable coordinate={coordinate} onPress={onPress} />
      {/* <BottomSheet
        snapPoints={["%100"]}
        children={<Text>Sheet</Text>}
        ref={bottomSheetModalRef}
      /> */}
    </>
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
