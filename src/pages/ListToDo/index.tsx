import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';
import 'moment/locale/pt-br';

import { Container, Text, ContainerHeader, ContainerText, Logo, Title, ContainerButton, ScrollableContainer, ContainerButtonCreate, ContainerLogo, Divisor } from './styles';

import Button from '../../components/Button';
import Card from '../../components/Card';
import ModalDelete from '../../components/ModalDelete';
import ModalFilter from '../../components/ModalFilter';

import { useMyStore } from '../../store/store';
import { useMock } from '../../store/mock';
import { useAuth } from '../../hooks/auth';

import imageLogo from '../../assets/logo.png';

interface ScreenProps {
  navigation: any;
}

const ListToDo: React.FC<ScreenProps> = ({ navigation }) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
  const [isOpenModalFilter, setIsOpenModalFilter] = useState<boolean>(false)
  const [day, setDay] = useState<string>('')

  const idTaskSelected = useMyStore((state) => state.idTaskSelected);
  const setIdTaskSelected = useMyStore((state) => state.setIdTaskSelected);

  const tasks = useMock((state) => state.data);
  const setTasks = useMock((state) => state.setNewData);

  const { signOut } = useAuth();

  const handleDelete = (id: string) => {
      setTasks(tasks.filter(t => t.id !== id))
      setIsOpenModalDelete(false)
  }

  useEffect(() => {
    const newDate = new Date().toLocaleString('pt-BR', {weekday: 'long'})
    console.log(newDate)
    const dataFormatada = moment(newDate, 'dddd, DD/MM/YYYY hh:mm:ss A').locale('pt-br').format('dddd, DD [de] MMMM');
    setDay(dataFormatada);
  },[])

  return (
    <Container>
      
      <ModalDelete 
        isOpen={isOpenModalDelete} 
        handleClose={() => setIsOpenModalDelete(false)}
        handleDeleteTaks={() => handleDelete(idTaskSelected)}
      />

      <ModalFilter 
        isOpen={isOpenModalFilter} 
        handleClose={() => setIsOpenModalFilter(false)}
        handleFilter={() => console.log('filter')}
      />

      <ContainerLogo>
        <Logo source={imageLogo}/>
        <Icon name='logout' color="#262833" size={30} onPress={signOut}/>
      </ContainerLogo>
      <ContainerHeader>
        <ContainerText>
          <Title>Tarefas de hoje</Title>
          <Text>{day}</Text>
        </ContainerText>
        <ContainerButton>
          <Button inline title='Filtrar' onPress={() => setIsOpenModalFilter(true)} nameIcon='filter' sizeIcon={14}/>
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
        {/* <Divisor />
        <Title style={{marginBottom: 15}} >Próximas demandas</Title>
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
        ))} */}
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