import React, { useState } from 'react';

import { Container, Text, ContainerHeader, ContainerText, Logo, Title, ContainerButton, ScrollableContainer, ContainerButtonCreate } from './styles';

import Button from '../../components/Button';
import Card from '../../components/Card';
import ModalDelete from '../../components/ModalDelete';

import { useMyStore } from '../../store/store';
import { useMock } from '../../store/mock';

import imageLogo from '../../assets/logo.png';

interface ScreenProps {
  navigation: any;
}

const ListToDo: React.FC<ScreenProps> = ({ navigation }) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)

  const idTaskSelected = useMyStore((state) => state.idTaskSelected);
  const setIdTaskSelected = useMyStore((state) => state.setIdTaskSelected);

  const tasks = useMock((state) => state.data);
  const setTasks = useMock((state) => state.setNewData);

  const handleDelete = (id: string) => {
      setTasks(tasks.filter(t => t.id !== id))
      setIsOpenModalDelete(false)
  }

  return (
    <Container>
      
      <ModalDelete 
        isOpen={isOpenModalDelete} 
        handleClose={() => setIsOpenModalDelete(false)}
        handleDeleteTaks={() => handleDelete(idTaskSelected)}
      />

      <Logo source={imageLogo}/>
      <ContainerHeader>
        <ContainerText>
          <Title>Tarefas de hoje</Title>
          <Text>Segunda-feira, 14 de fevereiro</Text>
        </ContainerText>
        <ContainerButton>
          <Button inline title='Filtrar' onPress={() => console.log(`fea`)} nameIcon='filter' sizeIcon={14}/>
        </ContainerButton>
      </ContainerHeader>
      <ScrollableContainer showsVerticalScrollIndicator={false}>
        {tasks.map((data, _i) => (
          <Card 
            key={data.id}
            idParams={data.id}
            company={data.company} 
            date={data.date} 
            finishedParams={data.finishedParams} 
            hour={data.hour} 
            title={data.title} 
            handleDelete={() => {
              setIsOpenModalDelete(true);
              setIdTaskSelected(data.id)
            }}
          />
        ))}
      </ScrollableContainer>
        <ContainerButtonCreate>
          <Button 
            inline={false} 
            title='Criar nova tarefa' 
            nameIcon='plus'
            sizeIcon={16}
            onPress={() => navigation.navigate('NewTask')}
          />
        </ContainerButtonCreate>

      
    </Container>
  );
}

export default ListToDo;