import React, { useState, useEffect } from 'react';

import {
  Container,
  Content,
  IdentificationBar,
  ContentTop,
  ContentTitle,
  Icon,
  Title,
  ContentBottom,
  IconBottom,
  Text
} from './styles';

import Label from '../Label';
import { useMock } from '../../store/mock';
import moment from 'moment';

interface CardProps {
  company: string;
  finishedParams: boolean;
  title: string;
  hour: string;
  date: string;
  idParams: string;
  handleDelete: () => void;
}

const Card: React.FC<CardProps> = ({ idParams, company, date, finishedParams, hour, title, handleDelete }) => {
  const [finished, setFinished] = useState<boolean>(finishedParams)
  const [late, setLate] = useState<boolean>(false)

  const tasks = useMock((state) => state.data);
  const setTasks = useMock((state) => state.setNewData);

  const handleFinishedTask = (id: string) => {
    const newTasks = tasks.map((task, index) => {
      if (task.id === id) {
        tasks[index].finishedParams = !finishedParams
      }
      return task
    })
    setFinished(!finished)
    setTimeout(() => {
      setTasks(newTasks)
    }, 3000)
  }

  useEffect(() => {
    const formatoData = 'DD/MM';
    const dataAtual = moment();
    const dataComparacao = moment(date, formatoData);
    setLate(dataComparacao.isBefore(dataAtual, 'day') ? true : false)
  }, [])

  return (
    <Container>
      <IdentificationBar company={company} />
      <Content>
        <ContentTop>
          <ContentTitle>
            {finished ? (
              <Icon name='checkbox-marked' size={36} color='#129E69' onPress={() => handleFinishedTask(idParams)} />
            ) : (
              <Icon name='checkbox-blank-outline' size={36} color='#CCCED9' onPress={() => handleFinishedTask(idParams)} />
            )}
            <Title numberOfLines={2} finished={finished} onPress={() => handleFinishedTask(idParams)}>{title}</Title>
          </ContentTitle>
          <Icon name='trash-can-outline' size={30} color='#E01644' onPress={handleDelete} />
        </ContentTop>
        <ContentBottom>
          <IconBottom name='clock' size={16} />
          <Text>{hour}</Text>
          <IconBottom name='calendar' size={16} />
          <Text>{date}</Text>
          {company && (
            <Label selected={false} title={company} />
          )}
          {late && finishedParams === false && (
            <Icon name="alert-decagram" size={20} color='#E01644' style={{ marginLeft: 5 }} />
          )}
        </ContentBottom>
      </Content>
    </Container>
  );
}

export default Card;