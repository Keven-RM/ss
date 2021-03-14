import styled from 'styled-components'


Container, Tittle, Option, TittleOption, Selection, 
IconContainer, TextContainer, TextContent 

export const Container = styled.View`
    align-items: center
`;

export const Tittle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    margin-top: 50px;
`;

export const Option = styled.View`
    width: 85%;
    padding: 10px;
    margin-top: 20px;
    background: #fff;
    border: 1px solid black;
`;

export const TittleOption = styled.Text`
    font-size: 24px;
    margin-bottom: 10px
`;

export const Selection = styled.View`
flex-direction: row
`;

export const IconContainer = styled.View`
    padding: 0px 20px
`;
export const TextContainer = styled.View`
    flex-direction: column;
    margin: 5px 0;
`;
export const TextContent = styled.Text`
font-size: 18px;
color: #666666;
`;