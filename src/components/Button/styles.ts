import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #006AFF;
  padding: 0 21px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export const Icon = styled(Feather)`
  color: #ffffff;
  margin-right: 5px;
`;