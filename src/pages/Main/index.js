import React, { useEffect, useState, useContext } from 'react';
import { View, Main, MapContainer, Text, IconContent } from './styles'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';  // remove PROVIDER_GOOGLE import if not using Google Maps

import OptionNavigate from '../../components/OptionNavigate'
import Icon from '../../components/LogoSvg'

export default function Main({navigation}){
  const [region, setRegion] = useState({    
    "latitude": -25.4233687,
    "longitude": -49.2727085,
    "latitudeDelta": 0.01,
    "longitudeDelta": 0.01
  })

  //ROtas 
  function LocalRoute(){
    return navigation.navigate("Local")
  }
  function BPMRoute(){
      navigation.navigate('BPM')
  }
  function GadgetRoute(){
      navigation.navigate('Gadget')
  }
  return (
    <View style={{flex: 1}}>
      <IconContent>
      <Icon width="50" height="50" />
      </IconContent>
      <Main>
        <MapContainer>
        <MapView
        onPress={() => LocalRoute()}
            style={{height: 300, width: 300}}
            initialRegion={{
              latitude: 49.2576508,
              longitude: -123.2639868,
              latitudeDelta: 0.010,
              longitudeDelta: 0.010
            }}
            region={region}
            provider={PROVIDER_GOOGLE}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
        >
          <Marker
            coordinate={region}
            title="Sua localização"
          />
          <Marker
            coordinate={region}
            title="Outra localização"
          />
        </MapView>
        </MapContainer>
            <Text>Clique no mapa para buscar a localização</Text>
        </Main>
            <OptionNavigate 
                icon="room" 
                name="LOCALIZAÇÃO" 
                content="Acessar localizações"  
                color="#31A315" 
                route={LocalRoute}
            />
            <OptionNavigate 
                icon="favorite" 
                name="FREQUÊNCIA CARDÍACA" 
                content="Localizado a 2 horas" 
                color="#ED0808" 
                route={BPMRoute} 
            />
            <OptionNavigate 
                icon="watch" 
                name="RASTREADOR" 
                content="Acessar informações" 
                color="#5586AA" 
                route={GadgetRoute} 
            />
    </View>
  )
}