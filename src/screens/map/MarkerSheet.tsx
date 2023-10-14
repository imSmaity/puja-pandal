import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Api from "../../api";
import { Button } from "../../components";

interface IMarkerSheet {
  onOpen: (isClose: boolean) => void;
  latitude: number;
  longitude: number;
  _id: string;
  district: string;
}

const MarkerSheet = ({
  onOpen,
  latitude,
  longitude,
  _id,
  district,
}: IMarkerSheet) => {
  const [pandalName, setPandalName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    bottomSheetModalRef.current?.expand();
  }, []);

  const setMarker = () => {
    const data = {
      latitude,
      longitude,
      email,
      pandalName,
      description,
      district,
    };
    console.log(data);
    //Add new pandal
    Api.addMarker(data)
      .then((data) => {
        console.log(data);
      })
      .catch(console.log);
  };

  return (
    <GestureHandlerRootView style={styles.sheetContainer}>
      <BottomSheet
        index={0}
        enablePanDownToClose={true}
        snapPoints={["100%"]}
        backgroundStyle={{ backgroundColor: "#F8F8F8" }}
        onClose={() => onOpen(false)}
      >
        <View>
          <Text
            style={{
              color: "#373636",
              textAlign: "center",
              fontSize: 16,
              padding: "3%",
            }}
          >
            Add New Pandal
          </Text>
          <View style={{ padding: "5%" }}>
            <TextInput
              placeholder="Enter email"
              placeholderTextColor="#A5A7AB"
              value={email}
              style={styles.inputStyle}
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />
            <TextInput
              placeholder="Enter pandal name"
              placeholderTextColor="#A5A7AB"
              value={pandalName}
              style={styles.inputStyle}
              onChange={(e) => setPandalName(e.nativeEvent.text)}
            />
            <TextInput
              placeholder="Enter more details"
              placeholderTextColor="#A5A7AB"
              value={description}
              multiline={true}
              numberOfLines={2}
              style={styles.inputStyle}
              onChange={(e) => setDescription(e.nativeEvent.text)}
            />

            <Button
              label="Submit"
              onPress={() => {
                setMarker();
                onOpen(false);
                bottomSheetModalRef.current?.close();
              }}
              style={{ width: "50%" }}
              containerStyle={{ paddingTop: "8%", alignItems: "center" }}
            />
          </View>
        </View>
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
  contentContainer: {},
  inputStyle: {
    backgroundColor: "#ffffff",
    borderRadius: 5,
    marginBottom: "7%",
    padding: "4%",
    fontSize: 16,
    color: "#000000",
    textAlignVertical: "top",
  },
});

export default MarkerSheet;
