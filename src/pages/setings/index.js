import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { Container, Tittle, Option, TittleOption, Selection, IconContainer, TextContainer, TextContent } from './styles'

export default function Settings(){
    return(
        <Container>
            <Tittle>Configurações</Tittle>

            <Option>
                <TittleOption>Usuário</TittleOption>
                <Selection>
                    <IconContainer>
                        <Icon name="user" size={50} />
                    </IconContainer>
                    <TextContainer>
                        <TextContent>Keven Rodrigues Meirelles</TextContent>
                        <TextContent>*******</TextContent>
                    </TextContainer>
                </Selection>
            </Option>

            <Option>
                <TittleOption>Histórico</TittleOption>
                <Selection>
                    <TextContainer>
                        <TextContent>Limpar historíco</TextContent>
                    </TextContainer>
                </Selection>
            </Option>

        </Container>
    )
}