import React, { useState } from 'react';
import { Modal } from 'react-native';

import { ModalContainer, ModalContent, ModalText, ModalTitle, ContainerLabels } from './styles'

import Button from '../Button';
import Label from '../Label';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleFilter: () => void;
}

const ModalFilter: React.FC<ModalProps> = ({ isOpen, handleClose, handleFilter }) => {
  return (
    <Modal visible={isOpen} animationType="fade" transparent>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Filtros</ModalTitle>
          <ModalText>Filtre por empresa:</ModalText>
          <ContainerLabels>
            <Label title='q2bank' selected />
            <Label title='q2pay' selected={false} />
            <Label title='q2ingressos' selected={false} />
          </ContainerLabels>
          <ModalText>Filtre por estado da tarefa:</ModalText>
          <ContainerLabels style={{marginBottom: 54}}>
            <Label title='finalizada' selected={false} />
            <Label title='pendente' selected={false} />
          </ContainerLabels>
          <Button inline={false} title="Filtrar" onPress={handleFilter} />
          <Button inline title="Fechar" onPress={handleClose} />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default ModalFilter;