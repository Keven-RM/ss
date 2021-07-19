import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components'

export const Container = styled.View`
    align-items: center
`;

export const Tittle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    margin-top: 50px;
`;

export const Main = styled(RectButton)`
    height: 250px;
    width: 250px;
    margin-top: 30px;
    align-items: center;
    padding-top: 70px;
    border-radius: 30px;
    background: #fff;
    elevation: 5;
`;

export const CardText = styled.Text`
    font-size: 18px;
    margin-top: 30px;
`;

export const History = styled.View`
    width: 100%;
    margin-top: 38px;
`;

export const HistoryText = styled.Text`
    font-size: 17px;
    margin-left: 25px;
    margin-bottom: 10px;
`;

export const HistoryOption = styled.View`
    flex-direction: row;
    width: 90%;
    margin: 15px auto;
    elevation: 3;
    background: #fff;
    border-radius: 15px;
`;

export const IconContainer = styled.View`
    padding: 10px 0;
    padding-left: 40px;
`;

export const TextOption = styled.Text`
    padding: 20px 15px;
    font-size: 16px;
    font-weight: bold;
    width: 275px;
`;

export const Scroll = styled(ScrollView)`
    flex-direction: column;
    height: 300px;
    margin-bottom: 100px;
`;