import React from 'react'
import { Container, Main, Tittle, BPMContainer, BPMValue, BPMText, Button, ButtonText, Card, Content, CardSection, TittleCard, CardText, CardSecondText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function BPM(){
    return(
        <Container>
            <Main>
                <Tittle>Estado Cardíaco</Tittle>
                
                <BPMContainer>
                    <Icon name="favorite" size={50} color="red" />
                    <BPMValue>72</BPMValue>
                    <BPMText>BPM</BPMText>                    
                </BPMContainer>

                <Button><ButtonText>INÍCIAR MEDIÇÃO</ButtonText></Button>
            </Main>

            <Card>
                <TittleCard>Estado vital baseado no batimento cardíaco</TittleCard>
                    
                <Content>
                    <Icon name="mood" size={70} color="lime" />
                    <CardSection>
                        <CardText>Níveis moderados</CardText>   
                        <CardSecondText>Usuário está bem</CardSecondText>
                    </CardSection>
                </Content>
            </Card>
        </Container>
    )
}