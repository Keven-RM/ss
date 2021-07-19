import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext'
import axios from 'axios'

import {
        Container,
        Tittle,
        View,
        Label,
        InputView,
        TextInput,
        ButtonView,
        Button,
        Text,
        CancelView,
        TextCancel
      } from './styles';

const ChangeDatas = ({navigation}) => {
  const { user, setUser } = useContext(UserContext)

  var data = user;

  const ChangeName = (value) => {
    data.nome = value;
  }

  const ChangePassword = (value) => {
    data.senha = value;
  }

  const SetData = () => {
    setUser(data)
    axios.put(`http://192.168.1.5:8080/user/alterar/${user.email}/${user.nome}/${user.senha}`)
  }

  return (
    <Container>
      <Tittle>Alterar dados</Tittle>
      <View>
        <Label>Nome</Label>
        <InputView>
          <TextInput
            placeholder="Digite sua nova senha"
            defaultValue={user.nome}
            placeholderTextColor="#003f5c"
            onChangeText={(value) => ChangeName(value)}
          />
        </InputView>
      </View>
      <View>
        <Label>Senha</Label>
        <InputView>
          <TextInput
            placeholder="Digite sua nova senha"
            defaultValue={user.senha}
            placeholderTextColor="#003f5c"
            onChangeText={(value) => ChangePassword(value)}
          />
        </InputView>
      </View>


      <ButtonView>
        <Button onPress={() => SetData()}>
        <Text>Salvar dados</Text>
        </Button>
      </ButtonView>
    
      <CancelView onPress={() => navigation.navigate('Config')}>
        <TextCancel>Cancelar</TextCancel>
      </CancelView>

    </Container>
  );
}

export default ChangeDatas;