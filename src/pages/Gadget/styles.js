import styled from 'styled-components/native'

//Main, Title, Connection, Status, Battery, BatteryValue, Id, IdValue
export const Container = styled.View`
    background: #F1F1F1;   
    height: 100%;
    width: 100%;
    position: relative;
`;

export const Img = styled.Image`
    width: 250px;
    height: 250px;
    margin: 55px 55px 30px;
    border-radius: 20px
`;

export const NoConnectedContainer = styled.View`
    width: 250px;
    height: 250px;
    margin: 55px auto 60px;
    border-radius: 20px
    border: 2px solid black;
    justify-content: center; 
`;

export const ConnectionButton = styled.View`
    flex-direction: row;
    justify-content: center;
    border-radius: 10px;
    padding: 15px 10px;
    width: 60%;
    margin: 0px auto;
    background: white;
    elevation: 10;
    `;
    
export const ConnectionText = styled.Text`
    font-weight: 100;
    font-size: 20px;
    justify-content: center;
    text-align: center;
    color: green;
`;

export const Main = styled.View`
    align-items: center; 
    padding: 40px 10px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 27px;
`;

export const Text = styled.Text`
    font-weight: 100;
    font-size: 20px;
    margin-top: 10px;
    justify-content: center;
    text-align: center;
`;

export const RemoveConnection = styled.View`
    flex-direction: row;
    justify-content: center;
    border: 2px solid red;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin: 0px;
    background: red;
    elevation: 10;
`;

export const RemoveConnectionText = styled.Text`
    font-size: 18px;
    color: white;
    padding: 0px 10px;
`;

export const Battery = styled.View`
    position: absolute;
    top: 77%;
    left: 38%;
    align-items: center; 
    overflow: hidden;
`;

export const BatteryValue = styled.Text`
    color: #fff;
    font-size: 27px;
    font-weight: bold;
`;

export const StatusContainer = styled.View`
    align-items: center; 
    justify-content: center;
    width: 100px;
    height: 100px;
    border-radius: 20px
    background: #303030;

    border: 1px solid #D0D0D0;
`;

export const PopUp = styled.View`
    align-items: center; 
    justify-content: center;
    width:  300px;
    height: 300px;
    border-radius: 20px
    border: 3px solid #D0D0D0;
    background: #F1F1F1;
    margin: 160px auto;
`;