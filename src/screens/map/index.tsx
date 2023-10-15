import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import Api from "../../api";
import { LocationMarker } from "../../components";
import AddPandal from "./AddPandal";
import MarkerDetails from "./MarkerDetails";
import MarkerSheet from "./MarkerSheet";
import { IMarker } from "../../types";

const Map = () => {
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

  useEffect(() => {
    Api.getDistrictMarker(_id)
      .then((res: any) => setMarkers(res.data.markers))
      .catch(console.log);
  }, []);

  const handleMarker = (_id: string) => {
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
                _id={marker._id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                handleMarker={handleMarker}
              />
            ))}
          </MapView>
        </View>
        {isAddMarker ? (
          <AddPandal
            isAddMarker={isOpenAddMarkerSheet}
            onPress={() => setIsOpenAddMarkerSheet(true)}
          />
        ) : null}
        {isOpenAddMarkerSheet ? (
          <MarkerSheet
            _id={_id}
            district={place}
            onOpen={setIsOpenAddMarkerSheet}
            latitude={location.lat}
            longitude={location.lng}
          />
        ) : null}

        {isShowMarkerDetails ? (
          <MarkerDetails
            data={markerDetails}
            onClose={() => setIsShowMarkerDetails(false)}
          />
        ) : null}
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
