import React, { useState } from 'react'

import { Modal, Pressable } from 'react-native'
import { Container, Img, Main, Title , Text, RemoveConnection, RemoveConnectionText, Battery, StatusContainer, BatteryValue, PopUp, NoConnectedContainer, ConnectionButton, ConnectionText } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFA from 'react-native-vector-icons/FontAwesome5'
 

//IconNames: battery-full - Cheia; battery-half - Media; battery- quarter - pouca; battery-empty - vazia;

export default function Gadget(){
    const [modalVisible, setModalVisible] = useState(false);    
    const [isConnected, setIsConnected] = useState(true);    

    //valor da Bateria
    function BatteryValueFunction(BatteryValue){
        if(BatteryValue == 100){
            return "battery-full"
        }

        if(BatteryValue > 50){
            return "battery-three-quarters"
        }

        if(BatteryValue == 50 ){
            return "battery-half"
        }

        if(BatteryValue < 40){
            return "battery-quarter"
        }

        if(BatteryValue == 0){
            return "battery-empty"
        }
    }

    function BatteryColorFunction(BatteryValue){
        if(BatteryValue == 100){
            return "green"
        }

        if(BatteryValue > 50){
            return "lime"
        }

        if(BatteryValue == 50 ){
            return "yellow"
        }

        if(BatteryValue < 40){
            if(BatteryValue > 0){
                return "orange"
            }
        }

        if(BatteryValue === 0){
            return 'red'
        }
    }
    
    return(
       <>
       <Container>
        { isConnected ? 
           <>
        <Main>
            <Title>Status do rastreador</Title>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
                <Pressable onPress={()=> setModalVisible(false)}>
                <PopUp>
                    <Title>Informações</Title>
                    <Text>ID: 98765</Text>
                </PopUp>
                </Pressable>
            </Modal>

                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Img source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5LkVciWbGrO048bYgMDz0EjJ5POmqSxLFBv6k5mA6ut3LMNCgzfekWD50YwCYbgKsir0utLzZ&usqp=CAc',}} />
                </Pressable>


            <Pressable onPress={() => setIsConnected(false)}>
            <RemoveConnection>
                    <Icon name="clear" size={30} color="white" />
                    <RemoveConnectionText>Remover</RemoveConnectionText>
            </RemoveConnection>
            </Pressable>
        </Main>
        <Battery>
            <StatusContainer>
                <IconFA name={BatteryValueFunction(100)} color={BatteryColorFunction(100)} size={30} />
                <BatteryValue>100%</BatteryValue>
            </StatusContainer>
            <Text>Bateria</Text>
        </Battery>
            </>
            :
            <>
            <Main>
                <Title>Status do rastreador</Title>

                <NoConnectedContainer>
                    <Text>Nenhum aparelho conectado</Text>
                </NoConnectedContainer>
            </Main>
                <Pressable onPress={()=> setIsConnected(true)}>
                <ConnectionButton>
                    <ConnectionText>Conectar</ConnectionText>
                </ConnectionButton>
                </Pressable>
            </>
            }
        </Container>
       </>
    )
}