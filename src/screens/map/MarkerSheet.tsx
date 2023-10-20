import React, { RefObject, useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Api from "../../api";
import { Button } from "../../components";

interface IMarkerSheet {
  onOpen: (isClose: boolean) => void;
  onClose: () => void;
  latitude: number;
  longitude: number;
  _id: string;
  district: string;
  refMarkerRBSheet: RefObject<RBSheet>;
}

const { height } = Dimensions.get("window");

const MarkerSheet = ({
  onOpen,
  latitude,
  longitude,
  _id,
  district,
  refMarkerRBSheet,
  onClose,
}: IMarkerSheet) => {
  const [pandalName, setPandalName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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
    // @ts-ignore
    <RBSheet
      ref={refMarkerRBSheet}
      height={height - 300}
      closeOnPressBack={true}
      closeOnDragDown={true}
      customStyles={{
        container: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          backgroundColor: "#F8F8F8",
        },
        draggableIcon: {
          width: "15%",
          height: 4,
        },
      }}
      onClose={onClose}
    >
      <View style={{}}>
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
            maxLength={190}
            style={styles.inputStyle}
            onChange={(e) => {
              setDescription(e.nativeEvent.text);
            }}
          />
          <Button
            onPress={() => {
              setMarker();
              onOpen(false);
              refMarkerRBSheet.current?.close();
            }}
            style={{ width: "50%" }}
            containerStyle={{ paddingTop: "3%", alignItems: "center" }}
          >
            <Text
              style={[
                {
                  color: "#ffffff",
                  textAlign: "center",
                  fontSize: 16,
                },
              ]}
            >
              Submit
            </Text>
          </Button>
        </View>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: "#ffffff30",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "66%",
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
