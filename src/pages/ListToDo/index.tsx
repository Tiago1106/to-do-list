import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';
import 'moment/locale/pt-br';

import {
  Container,
  Text,
  ContainerHeader,
  ContainerText,
  Logo,
  Title,
  ContainerButton,
  ScrollableContainer,
  ContainerButtonCreate,
  ContainerLogo,
  Divisor,
  ContainerMessage,
  Message
} from './styles';

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
  const haveFilters = useMyStore((state) => state.haveFilter);

  const tasks = useMock((state) => state.data);
  const setTasks = useMock((state) => state.setNewData);
  const taskFilter = useMock((state) => state.dataFilter);

  const { signOut } = useAuth();

  const handleDelete = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id))
    setIsOpenModalDelete(false)
  }

  useEffect(() => {
    const newDate = new Date().toLocaleString('pt-BR', { weekday: 'long' })
    const dataFormatada = moment(newDate, 'dddd, DD/MM/YYYY hh:mm:ss A').locale('pt-br').format('dddd, DD [de] MMMM');
    setDay(dataFormatada);
  }, [])

  function ListTasks() {
    // VERIFICA SE TEM FILTRO 
    if (haveFilters > 0) {
      //VERIFICA SE TEM TAREFAS COM ESSE FILTRO
      if (taskFilter.length > 0) {
        // RETORNA AS TAREFAS COM O FILTRO
        const auxTaskFilter = taskFilter.map((data, _index) => {
          return (
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
          )
        })

        return auxTaskFilter
      } else {
        // RETORNA UM TEXTO " NENHUMA TAREFA COM OS FILTROS ENCONTRADA "
        return (
          <ContainerMessage>
            <Message>Nenhuma tarefa encontrada com esse filtro</Message>
          </ContainerMessage>
        )
      }
    } else {
      // VERIFICA SE EXISTE ALGUMA TAREFA CADASTRADA
      if (tasks.length > 0) {
        // RETORNA AS TAREFAS CADASTRADAS
        const auxTasks = tasks.map((data, _index) => {
          return (
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
          )
        })
        return auxTasks
      } else {
        // RETORNA UM TEXTO "NENHUMA TAREFA CADASTRADA"
        return (
          <ContainerMessage>
            <Message>Nenhuma tarefa cadastrada</Message>
          </ContainerMessage>
        )
      }
    }
  }

  useEffect(() => {
    ListTasks();
  }, [haveFilters, tasks, taskFilter])

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
        <Logo source={imageLogo} />
        <Icon name='logout' color="#262833" size={30} onPress={signOut} />
      </ContainerLogo>
      <ContainerHeader>
        <ContainerText>
          <Title>Tarefas de hoje</Title>
          <Text>{day}</Text>
        </ContainerText>
        <ContainerButton>
          <Button inline title='Filtrar' onPress={() => setIsOpenModalFilter(true)} nameIcon='filter' sizeIcon={14} haveFilter={haveFilters}/>
        </ContainerButton>
      </ContainerHeader>
      <ScrollableContainer showsVerticalScrollIndicator={false}>
        {ListTasks()}
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