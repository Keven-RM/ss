// Container, Tittle, View, Label, TextInput, ButtonView, Button

import styled from 'styled-components'

export const Container = styled.View`
    padding: 15px 20px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const Tittle = styled.Text`
    font-size: 23px;
    font-weight: bold;
`;

export const View = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px 0;
`;

export const Label = styled.Text`
    font-size: 17px;
`;

export const InputView = styled.View`
    height: 45px;
    width: 95%;
    margin: 20px auto;
    alignItems: center;
    background-color: #d8d8d8;
    border-radius: 80px;
`

export const TextInput = styled.TextInput`
    width: 80%;
    alignItems: center;
    paddingTop: 8px;
    font-size: 16px;
`;

export const ButtonView = styled.View`
    align-items: center;
`

export const Button = styled.TouchableOpacity`
    width: 80%;
    border-radius: 25px;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 10px;
    background-color: #106cd6;
`

export const Text = styled.Text`
    font-size: 20px;
    color: white;
`

export const CancelView = styled.TouchableOpacity`
    width: 100%;
    align-items: center;
`

export const TextCancel = styled.Text`
    font-size: 15px;
    color: black;
`