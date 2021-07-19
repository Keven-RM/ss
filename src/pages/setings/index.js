import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Container,
         Tittle,
         Option,
         TittleOption,
         Selection,
         IconContainer,
         TextContainer,
         TextContent,
         UserName,
         EditButton,
         Text
     } from './styles'

import axios from 'axios'
import { UserContext } from '../../context/UserContext'

export default function Settings({navigation}){
    const { user, setUser } = useContext(UserContext)
    
    const ClearHistory = async () => {
        const response = await axios.get(`http://192.168.1.5:8080/user/deletar-historico/${user.email}`)   

        var values = user;
        values.historico_de_posicao = [];
        setUser(values)

        if(response.data){ 
            navigation.navigate('Local') 
        }
    }
    
    return(
        <Container>
            <Tittle>Configurações</Tittle>

            <Option>
                <IconContainer>
                    <Icon name="user-alt" size={50} />
                </IconContainer>
                <TextContainer>
                    <UserName>{user.nome}</UserName>
                    <TextContent>{user.email}</TextContent>
                </TextContainer>

                <Selection>
                    <EditButton onPress={() => { navigation.navigate('ChangeDatas')}}>
                        <Text>Edti perfil</Text>
                        <Icon name="angle-right" size={30} color="white" />
                    </EditButton>
                </Selection>
            </Option>

            <Option>
                <TittleOption>Histórico</TittleOption>
                <Selection>
                <EditButton onPress={ ()=> ClearHistory()}>
                        <Text>Limpar histórico</Text>
                        <Icon name="angle-right" size={30} color="white" />
                    </EditButton>
                </Selection>
            </Option>

        </Container>
    )
}