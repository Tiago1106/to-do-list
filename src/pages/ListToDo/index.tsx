import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, ActivityIndicator } from 'react-native';

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

interface DataProps {
  id: string;
  company: string;
  finishedParams: boolean;
  title: string;
  hour: string;
  date: string;
}

const ListToDo: React.FC<ScreenProps> = ({ navigation }) => {
  const [isOpenModalDelete, setIsOpenModalDelete] = useState<boolean>(false)
  const [isOpenModalFilter, setIsOpenModalFilter] = useState<boolean>(false)
  const [day, setDay] = useState<string>('')
  const [nextTask, setNextTask] = useState<DataProps[]>([])
  const [dayTask, setDayTask] = useState<DataProps[]>([])
  const [filterTask, setFilterTask] = useState<DataProps[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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
    if (haveFilters > 0) {
      if (taskFilter.length > 0) {
        const auxFilterTask: DataProps[] = taskFilter.map((data, _index) => {
          return data
        })
        setFilterTask(auxFilterTask)
      } else {
        setFilterTask([])
      }
    } else {
      if (tasks.length > 0) {
        const auxNextTask: DataProps[] = [];
        const auxDayTask: DataProps[] = [];
        tasks.map((data, _index) => {
          const formatoData = 'DD/MM';
          const dataAtual = moment();
          const dataComparacao = moment(data.date, formatoData);
          if (dataComparacao.isAfter(dataAtual, 'day')) {
            auxNextTask.push(data)
          } else {
            auxDayTask.push(data)
          }
        })
        setNextTask(auxNextTask)
        setDayTask(auxDayTask)
      }
    }
  }

  const getCard = (data: DataProps, index: number): JSX.Element => {
    const key = `${data.id}-${index}`
    return <Card
      key={key}
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
  }

  useEffect(() => {
    ListTasks();
    setLoading(false)
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
          <Button inline title='Filtrar' onPress={() => setIsOpenModalFilter(true)} nameIcon='filter' sizeIcon={14} haveFilter={haveFilters} />
        </ContainerButton>
      </ContainerHeader>
      <ScrollableContainer showsVerticalScrollIndicator={false}>
        {loading ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#999" />
          </View>
        ) : (
          <>
            {haveFilters > 0 ? (
              filterTask.length > 0 ? (
                filterTask.map((data, index) => (
                  getCard(data, index)
                ))
              ) : (
                <ContainerMessage>
                  <Message>Não possui tarefa com esses filtros encontrada!</Message>
                </ContainerMessage>
              )
            ) : (
              <>
                {tasks.length > 0 ? (
                  <>
                    {dayTask.length > 0 && (
                      dayTask.map((data, index) => (
                        getCard(data, index)
                      ))
                    )}

                    {dayTask.length === 0 && nextTask.length > 0 && (
                      <ContainerMessage>
                        <Message>Não possui tarefa para o dia de hoje!</Message>
                      </ContainerMessage>
                    )}

                    {nextTask.length > 0 && (
                      <>
                        <Divisor />
                        <Title style={{ marginBottom: 15 }} >Próximas demandas</Title>
                        {nextTask.map((data, index) => (
                          getCard(data, index)
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  <ContainerMessage>
                    <Message>Não possui tarefas cadastradas!</Message>
                  </ContainerMessage>
                )}
              </>
            )}
          </>
        )}
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