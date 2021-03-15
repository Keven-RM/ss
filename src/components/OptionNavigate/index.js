import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Div, Content, Title, Text, IconNavigation } from './styles'

export default function OptionNavigate(props) {

  return (
    <Container>
      <Div>
        <Icon name={props.icon} size={30} color={props.color}  style={props.style} />
      </Div>
      <Content>
        <Title>{props.name}</Title>
        <Text>{props.content}</Text>
      </Content>
      <IconNavigation>
        <Icon name="east" size={30} onPress={props.route} />
      </IconNavigation>
    </Container>
  );

}