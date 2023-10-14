import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const MarkerDetails = () => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    bottomSheetModalRef.current?.expand();
  }, []);
  return (
    <GestureHandlerRootView style={styles.sheetContainer}>
      <BottomSheet
        index={0}
        enablePanDownToClose={true}
        snapPoints={["100%"]}
        backgroundStyle={{ backgroundColor: "#F8F8F8" }}
        onClose={() => {}}
      >
        <View></View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: "#ffffff30",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "70%",
  },
});

export default MarkerDetails;
