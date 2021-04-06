import React, { useState, useContext } from 'react';
import { Modal, View, Pressable, Text } from 'react-native'
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
      Scroll,
      PopUp,
      Div
      } from './styles'

import axios from 'axios'
import { PositionContext } from '../../context/MapContext'
import { RectButton } from 'react-native-gesture-handler';

export default function Local({navigation}) {
  const [isVisible, setIsVisible] = useState(false)
  const [position, setPosition] = useContext(PositionContext)

  async function GetPosition(){
    await axios.get('http://192.168.1.12:8080/')
    .then(response => {
      if(response.data === [null, undefined]){
        setIsVisible(true)
      }else{
        setPosition(response.data)
        navigation.navigate('Map')
      }
    })
  }

  return (
    <Container>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <PopUp>
          <Div>
            <Icon name="close" color="red" size={25} onPress={() => setIsVisible(!isVisible)} />
          </Div>
          <Text style={{fontSize: 18, color: 'white'}}>Não foi possivel obter a localização</Text>
        </PopUp>

      </Modal>
      <Tittle>Localização</Tittle>
      <Main onPress={() => GetPosition()} >
          <Icon name="search" size={80} />
          <CardText>Buscar</CardText>
      </Main>
      <History>
        <HistoryText>Historíco de localização</HistoryText>
        <Scroll>
        <HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption><HistoryOption>
            <TextOption>Dia 2 de feve. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption>
          <HistoryOption>
            <TextOption>Dia 4 de março de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption>
          <HistoryOption>
            <TextOption>Dia 17 de junho de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption>
          <HistoryOption>
            <TextOption>Dia 22 de julho de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption>
          <HistoryOption>
            <TextOption>Dia 5 de agosto de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption>
          <HistoryOption>
            <TextOption>Dia 29 de setem. de 2021</TextOption>
            <IconContainer>
            <Icon name="east" size={40} />
            </IconContainer>
          </HistoryOption>
        </Scroll>
      </History>
    </Container>
  );
}