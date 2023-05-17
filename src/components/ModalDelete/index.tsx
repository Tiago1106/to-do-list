import React, { useState } from 'react';
import { Modal } from 'react-native';

import { ModalContainer, ModalContent, ModalText, ModalTitle } from './styles'

import Button from '../Button';


interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleDeleteTaks: () => void;
}

const ModalDelete: React.FC<ModalProps> = ({ isOpen, handleClose, handleDeleteTaks }) => {
  return (
    <Modal visible={isOpen} animationType="fade" transparent>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>Você tem certeza que deseja excluir essa tarefa?</ModalTitle>
          <ModalText>Essa ação não poderá se desfeita.</ModalText>
          <Button inline={false} title="Excluir" onPress={handleDeleteTaks} />
          <Button inline title="Deixar como está" onPress={handleClose} />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default ModalDelete;