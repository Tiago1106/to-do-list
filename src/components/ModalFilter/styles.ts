import styled from 'styled-components/native';


export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 90%;
  flex-direction: column;
  
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;

`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #262833;
`;

export const ModalText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #262833;

  margin: 24px 0 5px;
`;

export const ContainerLabels = styled.View`
  flex-direction: row;
`

export const ContainerTop = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const TextClear = styled.Text`
  color: #E01644;
  font-size: 18px;
`