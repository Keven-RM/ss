import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex-direction: row;
    width: 87%;
    border-radius: 13px;
    background: #FFFFFF;
    margin: 15px 0px;
    elevation: 5;
`;

export const Div = styled.View`
    padding: 17px 15px;
`;

export const Content = styled.View`
    width: 60%;
    padding: 5px 0px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const Text = styled.Text`
    font-size: 15px;
    color: black;
`;
 
export const IconNavigation = styled(RectButton)`
    margin: 7px 0px;
    margin-left: 30px;
    padding: 10px;
`;