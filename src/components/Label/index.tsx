import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface LabelProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  selected: boolean;
}

const Label: React.FC<LabelProps> = ({ onPress, selected, title }) => {
  return (
    <Container selected={selected} onPress={onPress}>
      <Text selected={selected}>{title}</Text>
    </Container>
  );
}

export default Label;