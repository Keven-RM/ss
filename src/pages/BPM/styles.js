import styled from 'styled-components'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    align-items: center
`;

export const Main = styled.View`
    margin: 40px auto;
    align-items: center;
    width: 80%;
`;

export const Tittle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-top: 10px;
`;

export const BPMContainer = styled.View`
    align-items: center;
    flex-direction: column;
    width: 60%;
    padding-top: 38px;
    border-radius: 200px;
    border: 10px solid red;
    height: 200px;
    margin: 30px auto;
`;

export const BPMValue = styled.Text`
    font-weight: bold;
    font-size: 30px;
    margin-top: 5px;
`;

export const BPMText = styled.Text`
    font-size: 16px;
`;

export const Button = styled(RectButton)`
    margin-top: 25px;
    padding: 10px 15px;
    border-radius: 10px;
    background: #ffff;
    elevation: 3;
`;

export const ButtonText = styled.Text`
    font-weight: 100;
    font-size: 20px;
`;

export const Card = styled.View`
    align-items: center;
    width: 75%;
    margin-top: 80px; 
    border: 1px solid black;
    border-radius: 10px;
    background: #ffff;
`;

export const TittleCard = styled.Text`
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    text-align: center;
`;

export const Content = styled.View`
    flex-direction: row;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
`;

export const CardSection = styled.View`
    flex-direction: column;
    padding: 5px;
    padding-left: 20px;
`;

export const CardText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    color: black;
    padding: 3px 0;
`;

export const CardSecondText = styled.Text`
    font-size: 16px;
    color: #868686;
    padding: 2px 0;
    max-width: 200px;
`;