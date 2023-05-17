import { css } from 'styled-components';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const screenWidth = Dimensions.get('window').width;

interface IdentificationBarProps {
  company: string;
}

interface TitleProps {
  finished: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 140px;

  flex-direction: row;

  background-color: #FFF;
  border: 1px solid #CCCED9;
  border-radius: 4px;

  margin-bottom: 16px;
`;

export const IdentificationBar = styled.View<IdentificationBarProps>`
  width: 5px;
  height: 100%;
  
  ${(props) => props.company === "q2bank" && css`
    background-color: #006AFF;
  `}
  ${(props) => props.company === "q2pay" && css`
    background-color: #094AEA;
  `}
  ${(props) => props.company === "q2ingressos" && css`
    background-color: #129E69;
  `}
`

export const Content = styled.View`
  width: ${screenWidth - 53}px;
  height: 100%;

  flex-direction: column;
`

export const ContentTop = styled.View`
  justify-content: space-between;
  flex-direction: row;

  border-bottom-color: #CCCED9;
  border-bottom-width: 1px;
  border-bottom-style: solid;

  padding: 27px 15px 27px 20px;
`

export const ContentTitle = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(IconMaterial)`

`

export const Title = styled.Text<TitleProps>`
  font-size: 16px;
  color: #262833;

  max-width: 200px;
  max-height: 42px;
  overflow: hidden;
  margin-left: 5px;

  ${(props) => props.finished && css`
    text-decoration-line: line-through;
  `}
`

export const ContentBottom = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  padding-left: 20px;
`

export const Text = styled.Text`
  font-size: 14px;
  color: #262833;
  margin-right: 18px;
`

export const IconBottom = styled(Feather)`
  margin-right: 4px;
  color: #262833;
`
