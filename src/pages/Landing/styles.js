import styled from 'styled-components/native'

export const View = styled.View`
    align-items: center; 
    height: 100%;
    background: #F1F1F1;
`;

export const MapContainer = styled.View`
    margin-bottom: 15px;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 1px;
    overflow: hidden;
    elevation: 7
`;

export const Main = styled.View`
    flex-direction: column;
    align-items: center; 
    width: 90%;
    overflow: hidden;
`;

export const MapText = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const IconContent = styled.View`
    margin: 45px 0;
    margin-bottom: 23px;
    align-items: center;
`;

export const FunctionOption = styled.View`
    height: 110px;
    width:  110px;
    border: 2px solid black;
    border-radius: 20px;
    background: #8A8A8A;
    align-items: center;
`;