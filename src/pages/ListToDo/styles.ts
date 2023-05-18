import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 28px 24px 0;
  
  background-color: #F7F8FA;
`;

export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`

export const ContainerText = styled.View`
  flex-direction: column;
`

export const Title = styled.Text`
  font-size: 24px;
  color: #262833;
`

export const Text = styled.Text`
  font-size: 14px;
  color: #262833;
  text-transform: capitalize;
`

export const Logo = styled.Image`
  width: 46px;
  height: 37px;

  margin-bottom: 28px;
`

export const ContainerButton = styled.View`
  width: 30%;
`

export const ScrollableContainer = styled.ScrollView`
  flex: 1;
`;

export const ContainerButtonCreate = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 10px;
`

export const ContainerLogo = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`

export const Divisor = styled.View`
  width: 100%;
  height: 1px;
  background-color: #CCCED9;
  margin: 10px 0 15px;
`