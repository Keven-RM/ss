import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import { MapView, PROVIDER_GOOGLE, Marker, initialRegion } from 'react-native-maps'
import * as Location from "expo-location";

export default function MapPage(){
  const [region, setRegion] = useState
  ({    
      latitude: 49.2576508,
      longitude: -123.2639868,
      latitudeDelta: 0.010,
      longitudeDelta: 0.010
    })


  const getCurrentPosition = async () => {
    var { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Ops!", "Permissão de acesso a localização negada.");
    }
  
    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setRegion({ latitude, longitude, latitudeDelta: 0.10, longitudeDelta: 0.10 });
  
  }

  useEffect(()=>{
    getCurrentPosition()
  },[])

  return (
    <View style={{flex: 1}}>
        <MapView
            style={{ flex: 1 }}
            initialRegion={initialRegion}
            region={region}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            loadingEnabled
        >
          <Marker
            initialRegion={initialRegion}
            coordinate={region}
            title="Sua localização"
          />
          <Marker
          initialRegion={initialRegion}
          coordinate={{
            latitude: -25.4233687,
            longitude: -49.2727085,
          }}
          title="Shopping Mueller"
        /> 
        </MapView>
    </View>
  );
}