import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Api from "../../api";
import { LocationMarker } from "../../components";
import AddPandal from "./AddPandal";
import MarkerDetails from "./MarkerDetails";
import MarkerSheet from "./MarkerSheet";
import { IMarker, MapScreenProps } from "../../types";
import RBSheet from "react-native-raw-bottom-sheet";

const Map = ({ navigation }: MapScreenProps) => {
  const [markerDetails, setMarkerDetails] = useState<IMarker>();
  const [isAddMarker, setIsAddMarker] = useState<boolean>(false);
  const [isOpenAddMarkerSheet, setIsOpenAddMarkerSheet] =
    useState<boolean>(false);
  const [isShowMarkerDetails, setIsShowMarkerDetails] =
    useState<boolean>(false);
  const [markers, setMarkers] = useState([]);
  const { params } = useRoute<any>();
  const { latitude, longitude, _id, place } = params;
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 22.499795,
    lng: 88.275085,
  });
  const refRBSheet = useRef<RBSheet>(null);
  const refMarkerRBSheet = useRef<RBSheet>(null);

  useEffect(() => {
    Api.getDistrictMarker(_id)
      .then((res: any) => setMarkers(res.data.markers))
      .catch(console.log);
  }, []);

  const handleMarker = (_id: string) => {
    refRBSheet.current?.open();
    Api.getMarker(_id)
      .then(({ data }: any) => {
        setMarkerDetails(data);
        setIsShowMarkerDetails(true);
      })
      .catch(console.log);
  };

  return (
    <>
      <SafeAreaView>
        <View style={{ width: "100%", height: "100%" }}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            onPress={(event) => {
              console.log("press event: ", event)
              setLocation({
                lat: event.nativeEvent.coordinate.latitude,
                lng: event.nativeEvent.coordinate.longitude,
              });
              setIsAddMarker(true);
            }}
          >
            <LocationMarker
              _id=""
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              handleMarker={() => {}}
            />
            {markers.map((marker: any) => (
              <LocationMarker
                key={marker._id}
                _id={marker._id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                handleMarker={handleMarker}
                key={marker._id}
              />
            ))}
          </MapView>
        </View>
        {isAddMarker ? (
          <AddPandal
            isAddMarker={isOpenAddMarkerSheet}
            onPress={() => refMarkerRBSheet.current?.open()}
          />
        ) : null}

        <MarkerSheet
          _id={_id}
          district={place}
          onOpen={setIsOpenAddMarkerSheet}
          latitude={location.lat}
          longitude={location.lng}
          refMarkerRBSheet={refMarkerRBSheet}
        />

        <MarkerDetails
          data={markerDetails}
          onClose={() => setIsShowMarkerDetails(false)}
          refRBSheet={refRBSheet}
        />

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
            source={require("../../../assets/images/map/arrow_left.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 100,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  sheetContainer: {
    backgroundColor: "#ffffff30",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "20%",
  },
  contentContainer: {},
});

export default Map;
