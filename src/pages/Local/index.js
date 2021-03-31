import * as React from 'react';

import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import OptionNavigate from '../../components/OptionNavigate'
import { StyleSheet } from 'react-native'

import { Container, Tittle, Main, CardText, History,HistoryOption, TextOption, HistoryText, IconContainer} from './styles'

export default function Local() {
  return (
    <Container>
      <Tittle>Localização</Tittle>
      <Main>
          <Icon name="search" size={80} />
          <CardText>Buscar</CardText>
      </Main>

      <History>
        <HistoryText>Historíco de localização</HistoryText>
        <ScrollView style={styles.scroll}>
          <HistoryOption>
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
        </ScrollView>
      </History>
    </Container>
  );
}

const styles = StyleSheet.create({
  scroll:{
    flexDirection: 'column',
    height: 270
}})