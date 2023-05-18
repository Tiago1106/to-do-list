import React, { useState } from 'react';
import { Modal } from 'react-native';

import { ModalContainer, ModalContent, ModalText, ModalTitle, ContainerLabels, ContainerTop, TextClear } from './styles'

import Button from '../Button';
import Label from '../Label';

import { useMock } from '../../store/mock';
import { useMyStore } from '../../store/store';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  handleFilter: () => void;
}

interface DataProps {
  id: string;
  company: string;
  finishedParams: boolean;
  title: string;
  hour: string;
  date: string;
}

const ModalFilter: React.FC<ModalProps> = ({ isOpen, handleClose, handleFilter }) => {
  const [companySelect, setCompanySelect] = useState<string>('')
  const [stateTaskSelect, setStateTaskSelect] = useState<boolean | undefined>(undefined)

  const setHaveTask = useMyStore((state) => state.setHaveFilter);
  const setTasks = useMock((state) => state.setNewDataFilter);
  const tasks = useMock((state) => state.data);
  
  const FilterTasks = () => {
    let filtered = tasks;
    let countFilters = 0

    if (companySelect) {
      filtered = filtered.filter(task => task.company === companySelect);
      countFilters = 1 + countFilters;
    }

    if (stateTaskSelect !== undefined) {
      filtered = filtered.filter(task => task.finishedParams === stateTaskSelect);
      countFilters = 1 + countFilters;
    }

    setHaveTask(countFilters)
    setTasks(filtered);
    handleClose()
  }

  const CleanFilter = () => {
    setCompanySelect('');
    setStateTaskSelect(undefined);
    setHaveTask(0)
    setTasks([])
    handleClose()
  }

  return (
    <Modal visible={isOpen} animationType="fade" transparent>
      <ModalContainer>
        <ModalContent>
          <ContainerTop>
            <ModalTitle>Filtros</ModalTitle>
            <TextClear onPress={CleanFilter}>Limpar</TextClear>
          </ContainerTop>
          <ModalText>Filtre por empresa:</ModalText>
          <ContainerLabels>
            <Label 
              title='q2bank' 
              selected={companySelect == 'q2bank' ? true : false} 
              onPress={() => setCompanySelect(companySelect === 'q2bank' ? '' : 'q2bank')}
            />
            <Label 
              title='q2pay' 
              selected={companySelect == 'q2pay' ? true : false} 
              onPress={() => setCompanySelect(companySelect === 'q2pay' ? '' : 'q2pay')}
            />
            <Label 
              title='q2ingressos' 
              selected={companySelect == 'q2ingressos' ? true : false} 
              onPress={() => setCompanySelect(companySelect === 'q2ingressos' ? '' : 'q2ingressos')}
            />
          </ContainerLabels>
          <ModalText>Filtre por estado da tarefa:</ModalText>
          <ContainerLabels style={{marginBottom: 54}}>
            <Label 
              title='finalizada' 
              selected={stateTaskSelect == true ? true : false} 
              onPress={() => setStateTaskSelect(stateTaskSelect === true ? undefined : true)}
            />
            <Label 
              title='pendente' 
              selected={stateTaskSelect == false ? true : false} 
              onPress={() => setStateTaskSelect(stateTaskSelect === false ? undefined : false)}
            />
          </ContainerLabels>
          <Button inline={false} title="Filtrar" onPress={FilterTasks} />
          <Button inline title="Fechar" onPress={handleClose} />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default ModalFilter;