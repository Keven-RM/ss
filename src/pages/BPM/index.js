import React, { useContext, useState } from 'react'
import {Container,
        Main,
        Tittle,
        BPMContainer,
        BPMValue,
        BPMText,
        Button,
        ButtonText,
        Card,
        Content,
        CardSection,
        TittleCard,
        CardText,
        CardSecondText
        } from './styles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { SocketContext } from '../../context/SocketContext'
import { UserContext } from '../../context/UserContext'

function BpmLegend({bpmNumber}){
    const bpmLegends = [
        {   
            // icon_name: 'sentiment_very_dissatisfied',
            icon_name: 'emoticon-dead-outline',
            iconColor: 'red',
            title: 'Nível baixo',
            message: 'Usuário pode estar cançado ou com muita falta de ar.'
        },
        {
            icon_name: 'emoticon-happy-outline',
            iconColor: 'lime',
            title: 'Nível moderado',
            message: 'Usuário está bem.'
        },
        {
            // icon_name: 'sentiment_dissatisfied',
            icon_name: 'emoticon-sad-outline',
            iconColor: 'red',
            title: 'Nível alto',
            message: 'Usuário pode estar atordoado ou com falta de ar.'
        }
    ];

    var index = 0

    if(bpmNumber < 60 ){
        var index = 0
    }
    if(bpmNumber > 60 && bpmNumber < 100){
        var index = 1
    }
    if(bpmNumber > 100){
        var index = 2
    }

    return(
        <>
         {  bpmNumber === 0 
            ? <></> 
            : <Icon name={bpmLegends[index].icon_name} size={70} color={bpmLegends[index].iconColor} />
        }
         <CardSection>
            <CardText>
                {   bpmNumber === 0
                    ? '        Ainda sem medições'
                    : bpmLegends[index].title
                }
            </CardText>   
            <CardSecondText>
                {   bpmNumber === 0
                    ? <></>
                    : bpmLegends[index].message
                }
            </CardSecondText>
         </CardSection>
        </>
    )
}

export default function BPM(){
    const [BPMResult, setBPMResult] = useState(0)
    
    const {sendMessage, socket} = useContext(SocketContext);
    const {tracker, setTracker} = useContext(UserContext);

    const GetBPM = () => {
        sendMessage('need-BPM');
    }

    socket.onmessage = ({data}) => {
        if(data.indexOf('BPM') > -1){
            var result = parseInt( data.replace('BPM-RESPONSE:', '') )
            setBPMResult(result)
        }
    }

    const UpdateTrackerInformation = () => {
        var values = tracker;
        values.BPM = BPMResult;
        setTracker(values)
    }

    UpdateTrackerInformation()

    return(
        <Container>
            <Main>
                <Tittle>Estado Cardíaco</Tittle>
                <BPMContainer>
                    <Icon name="cards-heart" size={50} color="red" />
                    <BPMValue>{BPMResult}</BPMValue>
                    <BPMText>BPM</BPMText>                    
                </BPMContainer>

                <Button onPress={() => GetBPM()}>
                    <ButtonText>INÍCIAR MEDIÇÃO</ButtonText>
                </Button>
                
            </Main>

            <Card>
                <TittleCard>Estado vital baseado no batimento cardíaco</TittleCard>
                <Content>
                    <BpmLegend bpmNumber={BPMResult}  />
                </Content>
            </Card>
        </Container>
    )
}