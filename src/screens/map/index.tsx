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
import { LocationMarker } from "../../components";

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

  const data = [
    {
      id: "1",
      coordinate: {
        latitude: 20.5937,
        longitude: 78.9629,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "12",
      coordinate: {
        latitude: 26.883769,
        longitude: 75.732925,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "1223",
      coordinate: {
        latitude: 22.478534,
        longitude: 88.248457,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "13655",
      coordinate: {
        latitude: 22.487316,
        longitude: 88.464892,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "32221",
      coordinate: {
        latitude: 22.695383,
        longitude: 88.323551,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "1330",
      coordinate: {
        latitude: 23.739225,
        longitude: 88.274613,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "33000",
      coordinate: {
        latitude: 23.572353,
        longitude: 87.672146,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "1322366",
      coordinate: {
        latitude: 23.645833,
        longitude: 86.630474,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "102550000",
      coordinate: {
        latitude: 21.984553,
        longitude: 87.381235,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
    {
      id: "100000002",
      coordinate: {
        latitude: 21.770388,
        longitude: 87.608376,
      },
      title: "pujo A",
      description: "Started few years ago",
    },
  ];

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
          {data.map((location) => (
            <LocationMarker
              key={location.id}
              id={location.id}
              coordinate={location.coordinate}
              title={location.title}
              description={location.description}
              handleMarker={() => {}}
            />
          ))}
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
