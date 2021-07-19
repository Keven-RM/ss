import React, { useEffect, useState } from 'react';
import { View, Alert, Text } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import * as Location from "expo-location";

export default function MapPage({ route }){
  const [region, setRegion] = useState(null)
  const [local, setLocal] = useState(null)
  
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

  const GetLocalPosition = () => { 
    setLocal({
    latitude:route.params.local.latitude, 
    longitude:route.params.local.longitude, 
    latitudeDelta:route.params.local.latitudeDelta, 
    longitudeDelta:route.params.local.longitudeDelta 
    })
  }

  useEffect(()=>{
    getCurrentPosition()
    GetLocalPosition()
  },[])

  return (
    <View style={{flex: 1}}>
      {local && region 
        ?
        <MapView
            style={{flex: 1}}
            initialRegion={region}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            loadingEnabled
        >
          <Marker
            coordinate={region}
            title="Sua localização"
          />
          <Marker
            coordinate={local}
            title="Rastreador"
            pinColor="blue"
          />
        </MapView>
        : 
        <Text>Carregando...</Text>
        }
    </View>
  )
}