import React, { useState, useContext, useEffect} from 'react'
import axios from 'axios'

import { Modal, Pressable } from 'react-native'
import { Container, Img, Main, Title , Text, Text2, RemoveConnection,
     RemoveConnectionText, Battery, StatusContainer, BatteryValue, 
     PopUp, NoConnectedContainer, ConnectionButton, ConnectionText,
     TextInput
    } from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'
import IconFA from 'react-native-vector-icons/FontAwesome5'

import { SocketContext } from '../../context/SocketContext'
import { UserContext } from '../../context/UserContext'

export default function Gadget(){
    const [valueInput, setValueInput] = useState('')
    const [baterryValue, setBaterryValue] = useState(100)
    const [modalVisible, setModalVisible] = useState(false);    
    const [isConnected, setIsConnected] = useState(false);    

    //valor da Bateria
    const BatteryValueFunction = (BatteryValue) => {
        if(BatteryValue === 100){
            return "battery-full"
        }

        if(BatteryValue > 50){
            return "battery-three-quarters"
        }

        if(BatteryValue === 50 ){
            return "battery-half"
        }

        if(BatteryValue < 40 && BatteryValue >0){
            return "battery-quarter"
        }

        if(BatteryValue === 0){
            return "battery-empty"
        }
    }

    const BatteryColorFunction = (BatteryValue) => {
        if(BatteryValue === 100){
            return "green"
        }

        if(BatteryValue > 50){
            return "lime"
        }

        if(BatteryValue == 50 ){
            return "yellow"
        }

        if(BatteryValue < 40 && BatteryValue > 0){
            return "orange"
        }

        if(BatteryValue === 0){
            return 'red'
        }
    }
    
    const { sendMessage, socket } = useContext(SocketContext)
    const { user, tracker, setTracker } = useContext(UserContext)

    const GetTracker = () => {
        sendMessage(`connect_tracker:${valueInput}`)
    }
    
    const RemoveTracker = () => {
        sendMessage('remove_tracker')
        setIsConnected(false)
        axios.post(`http://192.168.1.5:8080/remover-tracker/${user.email}`)
    }
  
    socket.onmessage = ({data}) =>{
        if(data == 'connected'){            
            setIsConnected(true)
            axios.post(`http://192.168.1.5:8080/user/adicionar-tracker/${user.email}/${valueInput}`)
            sendMessage('need-battery')

        }

        if(data.indexOf('BATTERY') > -1){
            var result = parseInt( data.replace('BATTERY-RESPONSE:', '') )
            setBaterryValue(result)
        }
    }

    const UpdateTrackerInformation = () => {
        var values = tracker;
        values.id      = valueInput;
        values.baterry = baterryValue;

        setTracker(values)
    }

    UpdateTrackerInformation()

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
                setModalVisible(!modalVisible)
            }}
            >
                <Pressable onPress={()=> setModalVisible(false)}>
                <PopUp>
                    <Title>ID</Title>
                    <Text>{valueInput}</Text>
                </PopUp>
                </Pressable>
            </Modal>

                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Img source={{uri: 'https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-tracker-glyph-black-icon-png-image_1503533.jpg',}} />
                </Pressable>

            <RemoveConnection onPress={() => RemoveTracker()}>
                    <Icon name="clear" size={30} color="white" />
                    <RemoveConnectionText>Remover</RemoveConnectionText>
            </RemoveConnection>
        </Main>
        <Battery>
            <StatusContainer>
                <IconFA name={BatteryValueFunction(baterryValue)} color={BatteryColorFunction(baterryValue)} size={30} />
                <BatteryValue>{baterryValue}%</BatteryValue>
            </StatusContainer>
            <Text>Bateria</Text>
        </Battery>
            </>
            :
            <>
            <Main>
                <Title>Status do rastreador</Title>
                <Text2>Nenhum dispositivo concectado</Text2>
                <TextInput 
                    // style={styles.input}
                    onChangeText={setValueInput}
                    value={valueInput}
                    placeholder="Digite o ID do rastreador"
                    keyboardType="default"
                    selectionColor="#303030"
                />
                <ConnectionButton onPress={() => GetTracker()}>
                    <ConnectionText>Conectar dispositivo</ConnectionText>
                </ConnectionButton>
            </Main>
            </>
            }
        </Container>
       </>
    )
}