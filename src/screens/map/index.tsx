import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

const deviceWidth = Dimensions.get("window").width;

const Map = () => {
  const searchRef = useRef<GooglePlacesAutocompleteRef | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number }>({
    lat: 22.499795,
    lng: 88.275085,
  });

  useEffect(() => {
    searchRef.current?.setAddressText("Kolkata");
  }, []);
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <GooglePlacesAutocomplete
          placeholder="Search"
          ref={searchRef}
          onPress={(
            data: GooglePlaceData,
            details: GooglePlaceDetail | null
          ) => {
            // 'details' is provided when fetchDetails = true

            if (details) {
              setLocation(details.geometry.location);
            }
          }}
          fetchDetails={true}
          query={{
            key: "",
            language: "en",
          }}
          // renderRightButton={() => <Button title="clear" />}
          styles={{
            container: {
              zIndex: 100,
              width: deviceWidth - 30,
              position: "absolute",
              marginTop: "3%",
            },
            textInput: {
              height: 50,
              fontSize: 16,
            },
          }}
        />
      </View>
      <View style={{ width: "100%", height: "100%" }}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 20.5937,
              longitude: 78.9629,
            }}
            title={"Test Marker"}
            description={"This is a description of the marker"}
          />
          <Marker
            draggable
            coordinate={{
              latitude: 28.5937,
              longitude: 75.9629,
            }}
            title={"Test Marker"}
            description={"This is a description of the marker"}
          />
          <Marker
            draggable
            image={require("../../../assets/images/maa.png")}
            coordinate={{
              latitude: 22.5750393,
              longitude: 88.3661506999999,
            }}
            title={"Kolkata"}
            description={"This is a puja pandal"}
          />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
