import React, { useEffect, useState, useContext } from 'react';
import { View, Alert } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';  // remove PROVIDER_GOOGLE import if not using Google Maps
import * as Location from "expo-location";

import { PositionContext } from '../../context/MapContext'

export default function MapPage(){
  const [region, setRegion] = useState({    
    latitude: -15.1456399,
    longitude: -54.5101305,
    latitudeDelta: 0.0001,
    longitudeDelta:0.0001
  })

  const getCurrentPosition = async () => {
    var { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Ops!", "Permissão de acesso a localização negada.");
    }
    let {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setRegion({ latitude, longitude, latitudeDelta: 0.027, longitudeDelta: 0.027 });
  }

  const [position] = useContext(PositionContext)

  useEffect(()=>{
    getCurrentPosition()
  },[])

  return (
    <View style={{flex: 1}}>
        <MapView
            style={{flex: 1}}
            initialRegion={{
              latitude: 49.2576508,
              longitude: -123.2639868,
              latitudeDelta: 0.010,
              longitudeDelta: 0.010
            }}
            region={region}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            loadingEnabled
        >
          <Marker
            coordinate={region}
            title="Sua localização"
          />
          <Marker
            coordinate={position}
            title="Outra localização"
          />
        </MapView>
    </View>
  )
}