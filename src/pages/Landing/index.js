import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native'
import { View, Main, MapContainer, MapText, IconContent, FunctionOption } from './styles'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';  // remove PROVIDER_GOOGLE import if not using Google Maps
import OptionNavigate from '../../components/OptionNavigate'
import Logo from '../../components/LogoSvg'

import { UserContext } from '../../context/UserContext'

export default function Landing({navigation}){
  const { user, tracker } = useContext(UserContext)

  // if(user.historico_de_posicao[0]){
  //   var position = user.historico_de_posicao[user.historico_de_posicao.length - 2].local
  // }else{
  // }
  
  var position = null
  //Rotas 
  function LocalRoute(){
    return navigation.navigate("Local")
  }
  function BPMRoute(){
      navigation.navigate('BPM')
  }
  function GadgetRoute(){
      navigation.navigate('Gadget')
  }

  const IsLogged = () => {
    if(user.email == '' && user._id == ''){
      navigation.navigate('Login')
    }else{
      return;
    }
  }

  useEffect( () => {
    IsLogged()
    console.log(user)
  },[])

  return (
    <View style={{flex: 1}}>
      <IconContent>
        <Logo />
      </IconContent>
      <Main>
        <MapContainer>
        {
          position ? 
        <MapView
        onPress={() => LocalRoute()}
            style={{height: 270, width: 270}}
            initialRegion={{
              latitude: 49.2576508,
              longitude: -123.2639868,
              latitudeDelta: 0.010,
              longitudeDelta: 0.010
            }}
            region={position}
            provider={PROVIDER_GOOGLE}
            scrollEnabled={false}
            zoomEnabled={false}
            pitchEnabled={false}
            rotateEnabled={false}
        >
          <Marker
            coordinate={position}
            title="Rastreador"
          />

        </MapView>

        : 
        <View style={{height: 270, width: 270}}>
          <MapText style={{marginTop: 120}}>Ainda sem nenhuma busca</MapText>
        </View>
        }
        </MapContainer>
            <MapText>Clique no mapa para buscar a localização</MapText>
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
          content={`Última medição de ${tracker.BPM}bpm `}
          color="#ED0808"
          route={BPMRoute} 
      />
      <OptionNavigate 
          icon="watch" 
          name="RASTREADOR" 
          content={`Com ${tracker.battery}% de bateria`}
          color="#5586AA" 
          route={GadgetRoute} 
      />
    </View>
  )

}

const styles = StyleSheet.create({

  FunctionText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black'
  }

})