import React, { useState, createContext,useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const UserProvider = props => {    

    var DataUser = {
        _id: '',
        nome: '',
        email: '',
        senha: '',
        historico_de_posicao: [],
    }

    const [user, setUser] = useState(DataUser)
    const [tracker, setTracker] = useState({id: '', battery: 0, BPM: 0})

    useEffect(() => {
        async function Fecth(){
            var response = await axios.get(`http://192.168.1.5:8080/user/buscar_por_id/${user.id}`);
            setUser(response.data)
        }
        
        Fecth()
    },[])   

    return(
        <UserContext.Provider value={{user, setUser, tracker, setTracker}}>
            {props.children}
        </UserContext.Provider>
    )
}