import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const AddPandal = () => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.addBtn}
        onPress={() => {}}
      >
        <Image
          source={require("../../../assets/images/map/add.png")}
          style={{ width: 35, height: 35, padding: "5%" }}
        />
      </TouchableOpacity>
      <View style={styles.triangle}></View>
      <View style={styles.tooltip}>
        <Text>Add New Pandal</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    right: "3%",
    top: "2%",
    position: "absolute",
    backgroundColor: "#dedede",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
  },
  tooltip: {
    right: "3%",
    top: "10%",
    position: "absolute",
    backgroundColor: "#dedede",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    padding: "2.5%",
  },
  triangle: {
    right: "5%",
    top: "8%",
    position: "absolute",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#dedede", // Change this color to the desired color
    transform: [{ rotate: "0deg" }, { scaleX: 1.5 }],
  },
});

export default AddPandal;
