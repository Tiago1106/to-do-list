import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { css } from 'styled-components';

interface ButtonProps {
  inline: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  background-color: #006AFF;
  padding: 0 21px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 100%;
  height: 50px;

  margin: 5px 0;

  ${(props) => props.inline && css`
    border: 1px solid #006AFF;
    background-color: transparent;
  `}
`;

export const ButtonText = styled.Text<ButtonProps>`
  color: #ffffff;
  font-size: 18px;

  ${(props) => props.inline && css`
    color: #006AFF;
  `}
`;

export const Icon = styled(Feather)<ButtonProps>`
  color: #ffffff;
  margin-right: 5px;

  ${(props) => props.inline && css`
    color: #006AFF;
  `}
`;

export const ContainerHaveFilter = styled.View`
  width: 25px;
  height: 25px;
  position: absolute;
  right: -12px;
  top: -12px;
  border-radius: 12.5px;

  align-items: center;
  justify-content: center;

  background-color: #E01644;
`
export const TextHaveFilter = styled.Text`
  font-size: 14px;
  color: #ffffff;
`