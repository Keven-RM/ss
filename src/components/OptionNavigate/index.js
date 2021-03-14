import React from 'react';

import { Pressable } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Div, Content, Title, Text, IconNavigation } from './styles'

export default function OptionNavigate(props) {
  return (
    <>
    <Container>
      <Div>
        <Icon name={props.icon} size={30} color={props.color}  style={props.style} />
      </Div>
      <Content>
        <Title>{props.name}</Title>
        <Text>{props.content}</Text>
      </Content>
      <IconNavigation>
        <Pressable>
          <Icon name="east" size={30} />
        </Pressable>
      </IconNavigation>
    </Container>
    </>
  );
}