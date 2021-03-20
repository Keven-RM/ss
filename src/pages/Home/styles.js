import styled from 'styled-components/native'

export const View = styled.View`
    align-items: center; 
    height: 100%;
    background: #F1F1F1;
`;

export const MapContainer = styled.View`
    height: 325px;
    width: 90%;
    border-radius: 5px;
    elevation: 3;
    margin-bottom: 15px;
`;

export const Main = styled.View`
    flex-direction: column;
    align-items: center; 
    width: 90%;
    overflow: hidden;
    margin: 40px 0;
`;

export const Text = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
`;