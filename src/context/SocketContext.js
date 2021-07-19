import React, { createContext, useEffect,useState } from 'react'

import { w3cwebsocket } from 'websocket'
import ReconnectingWebSocket from 'reconnecting-websocket';

export const SocketContext = createContext();

export const SocketProvider = props => {   
    const [messageRecived, setMessageRecived] = useState('')

    const options = {
        WebSocket: w3cwebsocket, // custom WebSocket constructor
        connectionTimeout: 1000,
        maxRetries: 10,
    };
        
    const socket = new ReconnectingWebSocket('ws://192.168.1.5:8081', [], options);

    const conect = () => {
        socket.onopen = () => {
            console.log('Conectado')
            socket.send('passport:{"device_id":"60aac391652db4144c031ca7","type":"user"}')
        }
    }
    
    const sendMessage = (message) => {
        console.log(message)
        socket.send(message)
    }
    
    socket.onmessage = ({data}) =>{
        setMessageRecived(data)

        if(data == 'HELP'){
          return schedulePushNotification()
        }
    }
    
    useEffect(()=>{
        conect()
    },[])

    return(
        <SocketContext.Provider value={{sendMessage, messageRecived, socket}}>
            {props.children}
        </SocketContext.Provider>
    )
}