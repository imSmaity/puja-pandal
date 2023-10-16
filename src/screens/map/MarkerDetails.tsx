import React, { RefObject, useState } from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import Api from "../../api";
import { Button, Ratings } from "../../components";
import { IMarker } from "../../types";
import toCapitalizes from "../../utils/toCapitalizes";
import toRatings from "../../utils/toRatings";

interface IMarkerDetails {
  data: IMarker | undefined;
  onClose: () => void;
  refRBSheet: RefObject<RBSheet>;
}

const MarkerDetails = ({ data, onClose, refRBSheet }: IMarkerDetails) => {
  const [ratings, setRatings] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>("");

  const redirect = () => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${data?.latitude},${data?.longitude}`
    );
  };

  const setPost = () => {
    const ratingData = {
      rating: ratings,
      feedback,
    };
    Api.addMarkerFeedback(String(data?._id), ratingData)
      .then((res) => {
        setRatings(0);
        setFeedback("");
      })
      .catch(console.log);
  };

  return (
    // @ts-ignore
    <RBSheet
      ref={refRBSheet}
      height={540}
      closeOnPressBack={true}
      closeOnDragDown={true}
      customStyles={{
        container: {
          justifyContent: "center",
          alignItems: "center",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
        draggableIcon: {
          width: 0,
        },
      }}
      onClose={onClose}
    >
      <Image
        source={require("../../../assets/images/map/maa-durga.jpg")}
        style={{
          marginTop: "-9%",
          width: "100%",
          height: "32%",
          resizeMode: "contain",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <View>
        <View style={{ padding: "5%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "70%" }}>
              <Text style={{ fontSize: 18, color: "#000000" }}>
                {data?.pandalName}
              </Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                borderColor: "#a8a5a5",
                borderWidth: 1,
                borderRadius: 50,
                padding: "2%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "32%",
              }}
              onPress={redirect}
            >
              <Image
                source={require("../../../assets/images/map/rectangle.png")}
                style={{ width: 20, height: 20 }}
              />
              <Image
                source={require("../../../assets/images/map/arrow.png")}
                style={{
                  width: 10,
                  height: 10,
                  position: "absolute",
                  left: "13%",
                }}
              />
              <Text style={{ color: "#000000" }}>Directions</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: "#000000" }}>
            {toCapitalizes(String(data?.district.name))}
          </Text>
          <Ratings
            ratings={toRatings(data?.feedbacks)}
            numberOfRatings={data?.feedbacks.length}
            disabled={true}
            starContainerStyle={{ padding: "1%" }}
            starStyle={{ width: 16, height: 16 }}
          />
          <Text style={{ paddingTop: "4%", color: "#000000" }}>
            {data?.description}
          </Text>
          <Ratings
            ratings={ratings}
            setRatings={setRatings}
            disabled={false}
            containerStyle={{ justifyContent: "center" }}
          />
          <TextInput
            placeholder="Write your comment and feedback"
            placeholderTextColor="#A5A7AB"
            multiline={true}
            maxLength={90}
            value={feedback}
            style={{
              backgroundColor: "#F8F8F8",
              borderBottomWidth: 2,
              borderRadius: 5,
              borderColor: "#0696FF",
              fontSize: 14,
              color: "#000000",
              textAlignVertical: "top",
            }}
            onChange={(e) => setFeedback(e.nativeEvent.text)}
          />
          <Button
            label="Post"
            containerStyle={{
              paddingTop: "4%",
              display: "flex",
              alignItems: "flex-end",
            }}
            style={{ width: "28%", padding: "3%" }}
            onPress={setPost}
          />
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
    height: "75%",
  },
});

export default MarkerDetails;
