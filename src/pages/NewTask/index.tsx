import React, { useState } from 'react';

import { Container, ContainerHeader, Logo, Text, Title, ContainerInput, TitleInputs, DivCompanys } from './styles';

import imageLogo from '../../assets/logo.png';
import { useMock } from '../../store/mock';

import Input from '../../components/Input';
import Label from '../../components/Label';
import Button from '../../components/Button';

interface ScreenProps {
  navigation: any;
}

const NewTask: React.FC<ScreenProps> = ({ navigation }) => {
  const [descriptionTask, setDescriptionTask] = useState<string>('')
  const [hourTask, setHourTask] = useState<string>('')
  const [dateTask, setDateTask] = useState<string>('')
  const [companyTask, setCompanyTask] = useState<string>('')

  const tasks = useMock((state) => state.data);
  const setTasks = useMock((state) => state.setNewData);

  const handleNewTask = async () => {
    try {
      const DataNewTask = {
        id: Math.random().toString(),
        company: companyTask,
        finishedParams: false,
        title: descriptionTask,
        hour: hourTask,
        date: dateTask
      }
      
      setTasks([...tasks, DataNewTask])
      navigation.navigate('ListToDo')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <ContainerHeader>
        <Logo source={imageLogo}/>
        <Title>Crie uma tarefa</Title>
        <Text>Descreva brevemente a sua tarefa e adicione um prazo.</Text>
      </ContainerHeader>
      <ContainerInput>
        <TitleInputs>Dê um título para a sua tarefa</TitleInputs>
        <Input 
          placeholder='Descrição tarefa' 
          icon='clipboard' 
          isPassword={false} 
          onChangeValue={(e) => setDescriptionTask(e)}
          value={descriptionTask}
        />
      </ContainerInput>
      <ContainerInput>
        <TitleInputs>Horário limite</TitleInputs>
        <Input 
          placeholder='08:00' 
          icon='clock' 
          isPassword={false} 
          onChangeValue={(e) => setHourTask(e)}
          value={hourTask}
        />
      </ContainerInput>
      <ContainerInput>
        <TitleInputs>Data limite</TitleInputs>
        <Input 
          placeholder='14/02' 
          icon='calendar' 
          isPassword={false} 
          onChangeValue={(e) => setDateTask(e)}
          value={dateTask}
        />
      </ContainerInput>
      <ContainerInput>
        <TitleInputs>Selecione uma empresa:</TitleInputs>
        <DivCompanys>
          <Label title='q2bank' selected={companyTask === "q2bank" ? true : false} onPress={() => setCompanyTask('q2bank')}/>
          <Label title='q2pay' selected={companyTask === "q2pay" ? true : false} onPress={() => setCompanyTask('q2pay')}/>
          <Label title='q2ingressos' selected={companyTask === "q2ingressos" ? true : false} onPress={() => setCompanyTask('q2ingressos')}/>
        </DivCompanys>
      </ContainerInput>
      <Button title='Salvar tarefa' nameIcon='save' sizeIcon={16} inline={false} onPress={() => handleNewTask()}/>
    </Container>
  );
}

export default NewTask;