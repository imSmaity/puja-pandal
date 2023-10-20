import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Policy = ({ navigation }: any) => {
  return (
    <View style={{ paddingTop: "5%" }}>
      <Text style={{ textAlign: "center", fontSize: 20, color: "#000000" }}>
        Privacy Policy
      </Text>
      <View style={{ padding: "5%", display: "flex", gap: 10 }}>
        <Text style={{ fontSize: 16 }}>Privacy Policy for Puja Pandal</Text>
        <Text>
          1. This Privacy Policy explains how "Puja Pandal" ("we," "us," or
          "our") handles user information within the mobile application "Puja
          Pandal." By using the app.
        </Text>
        <Text>
          2. We do not collect any login data or personal information from
          users.
        </Text>
        <Text>
          3. Data Usage Our app does not collect, store, or transmit any
          personal or login data from users. We do not track your activity or
          request any permissions related to personal information.
        </Text>
        <Text>
          4. Data Security and Indian IT Act, 2000 We are committed to
          safeguarding user data and adhere to the data security requirements
          outlined in the Indian Information Technology Act, 2000. We take
          reasonable measures to protect any data we may handle and maintain
          safeguards against unauthorized access, disclosure, or damage to data,
          as required by Section 43A of the IT Act.
        </Text>
        <Text>
          5. Third-Party Services, We do not utilize any third-party services or
          libraries that may collect user data.
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          backgroundColor: "#fbfbfb97",
          borderRadius: 100,
          padding: "1%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/images/map/arrow_left.png")}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Policy;
