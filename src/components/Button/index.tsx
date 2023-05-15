import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, Icon, ButtonText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  nameIcon?: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, nameIcon, onPress, ...rest }) => {
  return (
    <ButtonContainer onPress={onPress} {...rest}>
      {nameIcon && <Icon size={24} name={nameIcon} />}
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;