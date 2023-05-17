import styled, { css } from "styled-components/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

interface InputProps {
  isFocused: boolean;
}

interface IconProps {
  isFocused: boolean;
  isComplete: boolean;
}

export const InputContainer = styled.View<InputProps>`
  flex-direction: row;
  width: 100%;
  height: 48px;
  border: 1px solid #CCCED9;
  border-radius: 8px;
  align-items: center;
  padding: 0 12px;
  margin: 10px 0;

  ${(props) => props.isFocused && css`
    border-color: #006AFF;
  `};
`

export const Icon = styled(FontAwesome)<IconProps>`
  color: #CCCED9;
  margin-right: 12px;
  
  ${(props) => props.isComplete && css`
    color: #094AEA;
  `};

  ${(props) => props.isFocused && css`
    color: #006AFF;
  `};
`

export const Input = styled.TextInput<InputProps>`
  flex: 1;
  padding: 5px;
  color: #262833;

  ${(props) => props.isFocused && css`
    border-color: #006AFF;
  `};

  /* ::placeholder {
    color: #A3A3A3;
  }; */
`