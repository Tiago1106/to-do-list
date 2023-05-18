import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonContainer, Icon, ButtonText, ContainerHaveFilter, TextHaveFilter } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  nameIcon?: string;
  onPress: () => void;
  sizeIcon?: number;
  inline: boolean;
  haveFilter?: number;
}

const Button: React.FC<ButtonProps> = ({ title, nameIcon, onPress, sizeIcon, inline, haveFilter, ...rest }) => {
  return (
    <ButtonContainer inline={inline} onPress={onPress} {...rest}>
      {nameIcon && <Icon size={sizeIcon} name={nameIcon} inline={inline} />}
      <ButtonText inline={inline}>{title}</ButtonText>
      {haveFilter ? (
        <ContainerHaveFilter><TextHaveFilter>{haveFilter}</TextHaveFilter></ContainerHaveFilter>
      ) : null}
    </ButtonContainer>
  );
};

export default Button;