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
      if(task.id === id) {
        tasks[index].finishedParams = !finishedParams
      }
      return task
     })
    setTasks(newTasks)
    setFinished(!finished)
  }

  useEffect(() => {
    const partsDate = date.split('/')
    const day = parseInt(partsDate[0], 10);
    const month = parseInt(partsDate[1], 10) - 1;
    const currentYear = new Date().getFullYear();
    const dateToCompare = new Date(currentYear, month, day);
    const currentDate = new Date();

    if(dateToCompare < currentDate) {
      setLate(true)
    }
  }, [])
  
  return (
    <Container>
      <IdentificationBar company={company}/>
      <Content>
        <ContentTop>
          <ContentTitle>
            {finished ? (
              <Icon name='checkbox-marked' size={36} color='#129E69' onPress={() => handleFinishedTask(idParams)}/>
            ) : (
              <Icon name='checkbox-blank-outline' size={36} color='#CCCED9' onPress={() => handleFinishedTask(idParams)}/>
            )}
            <Title numberOfLines={2} finished={finished} onPress={() => handleFinishedTask(idParams)}>{title}</Title>
          </ContentTitle>
          <Icon name='trash-can-outline' size={30} color='#E01644' onPress={handleDelete}/>
        </ContentTop>
        <ContentBottom>
          <IconBottom name='clock' size={16}/>
          <Text>{hour}</Text>
          <IconBottom name='calendar'size={16}/>
          <Text>{date}</Text>
          {company && (
            <Label selected={false} title={company}/>
          )}
          {late && finishedParams === false && (
            <Icon name="alert-decagram" size={20} color='#E01644' style={{marginLeft: 5}}/>
          )}
        </ContentBottom>
      </Content>
    </Container>
  );
}

export default Card;