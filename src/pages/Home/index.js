import React from 'react'

import { StatusBar } from 'expo-status-bar'
import OptionNavigate from '../../components/OptionNavigate'
import { View, Main, MapContainer, Text } from './styles'

export default function Home({navigation}){
    function LocalRoute(){
        return navigation.navigate("Local")
    }
    function BPMRoute(){
        navigation.navigate('BPM')
    }
    function GadgetRoute(){
        navigation.navigate('Gadget')
    }

    return( 
    <>      
    <View>
        <StatusBar style="auto" />

        <Main>
            <MapContainer />
            <Text>Clique no mapa para buscar a localização</Text>
        </Main>
            <OptionNavigate 
                icon="room" 
                name="LOCALIZAÇÃO" 
                content="Acessar localizações"  
                color="#31A315" 
                route={LocalRoute}
            />
            <OptionNavigate 
                icon="favorite" 
                name="FREQUÊNCIA CARDÍACA" 
                content="Localizado a 2 horas" 
                color="#ED0808" 
                route={BPMRoute} 
            />
            <OptionNavigate 
                icon="watch" 
                name="RASTREADOR" 
                content="Acessar informações" 
                color="#5586AA" 
                route={GadgetRoute} 
            />
    </View>
    </>
    )
}