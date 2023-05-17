import styled from 'styled-components/native';
import { css } from 'styled-components';

interface LabelProps {
  selected: boolean;
}

export const Container = styled.TouchableOpacity<LabelProps>`
  height: 26px;
  padding: 0 9px;

  align-items: center;
  justify-content: center;

  background-color: #FFF;
  border: 1px solid #006AFF;
  border-radius: 4px;

  margin-right: 5px;

  ${(props) => props.selected && css`
    background-color: #006AFF;
  `}
`;

export const Text = styled.Text<LabelProps>`
  color: #006AFF;
  font-size: 14px;
  text-transform: uppercase;

  ${(props) => props.selected && css`
    color: #FFF;
  `}
`
