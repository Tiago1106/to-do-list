import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, Icon, ButtonText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  nameIcon?: string;
  onPress: () => void;
  sizeIcon?: number;
  inline: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, nameIcon, onPress, sizeIcon, inline, ...rest }) => {
  return (
    <ButtonContainer inline={inline} onPress={onPress} {...rest}>
      {nameIcon && <Icon size={sizeIcon} name={nameIcon} inline={inline}/>}
      <ButtonText inline={inline}>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;