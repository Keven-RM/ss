import styled from 'styled-components/native'

export const View = styled.View`
    align-items: center; 
    height: 100%;
    background: #F1F1F1;
`;

export const MapContainer = styled.View`
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid grey;
    elevation: 3;
`;

export const Main = styled.View`
    flex-direction: column;
    align-items: center; 
    width: 90%;
    overflow: hidden;
`;

export const Text = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const IconContent = styled.View`
    margin: 23px 0;
    margin-bottom: 10px;
`;