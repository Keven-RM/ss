import React, {useState, useEffect} from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import MapView, { MapEvent, Marker } from 'react-native-maps';
import { RectButton } from "react-native-gesture-handler";

export default function Mapa() {
  const [devs, setDevs] = useState(null)

  function GetPosition(){
    navigator.geolocation.getCurrentPosition(
      (position)=> setDevs(position.coords), 
      ()=>{}, 
      {
        timeout: 4000,
        enableHighAccuracy: true,
        maximumAge: 0
      }
    )
  }

  useEffect(() => {
    GetPosition()
  }, []);
  

// Melhorar os nomes das variaveis da posição atual do usuario 

  return (
    <View>
      <MapView 
        initialRegion={{
          latitude: -25.3501072,
          longitude: -49.3051397,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        calloutAnchor={{
          x: 2.9,
          y: 0.8,
        }}
        style={styles.mapStyle}
      >
          <Marker
            calloutAnchor={{
              x: 2.9,
              y: 0.8,
            }}
            coordinate={{
              latitude: -25.3501072,
              longitude: -49.3051397
            }}
          >
          <View style={{backgroundColor: "red", padding: 10}}>
            <Text>Sua posição atual</Text>
          </View>
        </Marker>
        
      </MapView>
        <RectButton style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Próximo</Text>
        </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

})