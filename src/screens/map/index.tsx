import BottomSheet, { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GooglePlacesAutocompleteRef } from "react-native-google-places-autocomplete";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { LocationMarker } from "../../components";
import AddPandal from "./AddPandal";
import { MapParams } from "../../types";
import MarkerSheet from "./MarkerSheet";
import Api from "../../api";
import MarkerDetails from "./MarkerDetails";

const Map = () => {
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
            {/* {data.map((location) => (
              <LocationMarker
                key={location.id}
                id={location.id}
                coordinate={location.coordinate}
                title={location.title}
                description={location.description}
                handleMarker={() => bottomSheetModalRef.current?.expand()}
              />
            ))} */}

            <LocationMarker
              id=""
              coordinate={{ latitude: location.lat, longitude: location.lng }}
              title=""
              description=""
              handleMarker={() => {}}
            />
            {markers.map((marker: any) => (
              <LocationMarker
                id={marker._id}
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.pandalName}
                description={marker.description}
                handleMarker={() => setIsShowMarkerDetails(true)}
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

        {isShowMarkerDetails ? <MarkerDetails /> : null}
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
