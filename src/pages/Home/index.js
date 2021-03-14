import React from 'react'

import { StatusBar } from 'react-native'
import OptionNavigate from '../../components/OptionNavigate'
import { View, Main, Text, MapContainer } from './styles'

export default function Home(){
    return(
    <>      
    <View>
        <StatusBar backgroundColor="#F1F1F1" />

        <Main>
            <MapContainer />
            <Text>Ultima Localização feita em 2 horas</Text>
        </Main>

            <OptionNavigate icon="room" name="LOCALIZAÇÃO" content="Acessar localizações"  color="#31A315" />
            <OptionNavigate icon="favorite" name="FREQUÊNCIA CARDÍACA" content="Localizado a 2 horas" color="#ED0808" />
            <OptionNavigate icon="watch" name="RASTREADOR" content="Acessar informações" color="#5586AA" />
    </View>
    </>
    )
}