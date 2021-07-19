import styled from 'styled-components'
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    align-items: center
`;

export const Tittle = styled.Text`
    font-weight: bold;
    font-size: 24px;
    margin-top: 50px;
`;

export const Option = styled.View`
    width: 93%;
    padding: 10px;
    margin-top: 20px;
    background: #fff;
`;

export const TittleOption = styled.Text`
    font-size: 24px;
    margin: 5px 10px;
`;

export const Selection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 25px 10px 5px;
`;

export const IconContainer = styled.View`
    flex-direction: column;
    align-items: center;
    padding: 19px;    
    margin: 10px auto;
    border-radius: 90px;
    background-color: #d8d8d8;

`;
export const TextContainer = styled.View`
    align-items: center;
`;
export const TextContent = styled.Text`
    font-size: 18px;
    color: #666666;
    text-align: center;
    margin: 2px 0;
`;

export const UserName = styled.Text`
    font-size: 18px;
    color: black;
    text-align: center;
    margin: 7px 0;
    max-width: 200px;
    font-weight: bold;
`;

export const EditButton = styled(TouchableOpacity)`
    background-color: #106cd6;
    padding: 5px 10px;
    color: black;
    font-size: 50px;
    border-radius: 30px;
    flex-direction: row;
`;

export const Text = styled.Text`
    font-size: 18px;
    color: white;
    margin: auto;
    padding: 0 10px;
    padding-right: 10px;
`;
