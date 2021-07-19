import React, { useState, useEffect, useContext } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import{
      Container,
      Tittle, 
      Main, 
      CardText, 
      History,
      HistoryOption, 
      TextOption, 
      HistoryText, 
      IconContainer, 
      Scroll
      } from './styles'
import axios from 'axios'

import { SocketContext } from '../../context/SocketContext'
import { UserContext } from '../../context/UserContext'

export default function Local({navigation}) {
  const [position, setPosition] = useState(null)
  const {sendMessage, socket}    = useContext(SocketContext);
  const {user, setUser}          = useContext(UserContext);
  
  const GetLocation = () => {
    sendMessage('need-location')
  }
  
  const UpdateTrackerInformation = () => {
    var month = new Array(
      'jan', 'fev', 'mar', 'abr', 'maio', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'
    );
    
    var values = user;
    var new_history = {
        data: `${new Date().getDate()} de ${month[new Date().getMonth()]} de ${new Date().getFullYear()}`,
        hora: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        local: {
          latitude:  position.latitude,
          longitude:  position.longitude,
          latitudeDelta: 0.010,
          longitudeDelta: 0.010
        }
    }

    values.historico_de_posicao.push(new_history)
    setUser(values)

    //Rota de atualização do historico de localização
    axios({
      method: 'post',
      url: `http://192.168.1.5:8080/user/inserir-historico/${user.email}`,
      data: new_history
    });

  }

  const GotoMap = (data) => {

    if(data.indexOf('LOCATION-RESPONSE') > -1){
      console.log('Passou')
      var index = data.indexOf(':') + 1;
      var result = data.slice(index);
      setPosition(JSON.parse(result)) // Message exemple to be sended by server: LOCATION-RESPONSE:{"latitude":-25.3485586,"longitude":-49.2959617,"latitudeDelta":0.010,"longitudeDelta":0.010}
      UpdateTrackerInformation()//Atualiza o context do usuario

      navigation.navigate('Map', {local: position}) //Vai para o mapa
    }
  }

  socket.onmessage = ({data}) => {
    GotoMap(data)
  }

  useEffect(()=> {
    setUser(user)
  }, [])

  return (
    <Container>
      <Tittle>Localização</Tittle>
      <Main onPress={ () => GetLocation()}>
          <Icon name="search" size={80} />
          <CardText>Buscar localização</CardText>
      </Main>
      <History>

        <HistoryText>Historíco de localização</HistoryText>
        <Scroll>
        {user.historico_de_posicao.map( (data, i) => (
          <HistoryOption key={i}>
            <TextOption>Dia {data.data}</TextOption>
            <IconContainer>
              <Icon 
                name="east" 
                size={40} 
                onPress={() => {
                  navigation.navigate(
                      'Map',
                      {local: data.local}
                )}}  
              />
            </IconContainer>
          </HistoryOption>  
        ))}
        </Scroll>
      </History>
    </Container>
  );
}