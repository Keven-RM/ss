import React from 'react'

import { StatusBar } from 'expo-status-bar'
import OptionNavigate from '../../components/OptionNavigate'
import { View, Main, Text, MapContainer } from './styles'
export default function Home({navigation}){
    
    const LocalRoute = () =>{
        navigation.navigate('Local')
    }
    const BPMRoute = () =>{
        navigation.navigate('BPM')
    }
    const GadgetRoute = () =>{
        navigation.navigate('Gadget')
    }

    return(
    <>      
    <View>
        <StatusBar style="auto" />

        <Main>
            <MapContainer />
        </Main>
            <Text onPress={() =>{navigation.navigate('Local')}}>hghjbkl</Text>
            <OptionNavigate icon="room" name="LOCALIZAÇÃO" content="Acessar localizações"  color="#31A315" route={LocalRoute} />
            <OptionNavigate icon="favorite" name="FREQUÊNCIA CARDÍACA" content="Localizado a 2 horas" color="#ED0808" route={BPMRoute} />
            <OptionNavigate icon="watch" name="RASTREADOR" content="Acessar informações" color="#5586AA" route={GadgetRoute} />
    </View>
    </>
    )
}