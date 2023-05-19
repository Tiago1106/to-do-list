import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Alert  } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';

import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

import { Container, ContainerHeader, Logo, Text, Title, ContainerInput, TitleInputs, DivCompanys, ContainerLogo } from './styles';

import imageLogo from '../../assets/logo.png';
import { useMock } from '../../store/mock';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';
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

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const handleNewTask = () => {  
    const hourValid = /^([01]\d|2[0-3]):([0-5]\d)$/.test(hourTask)
    const dateValid = moment(dateTask, 'DD/MM', true).isValid();
    if(descriptionTask && dateTask && hourTask) {
      if(hourValid && dateValid) {
        const DataNewTask = {
          id: uuidv4(),
          company: companyTask,
          finishedParams: false,
          title: descriptionTask,
          hour: hourTask,
          date: dateTask
        }
        
        setTasks([...tasks, DataNewTask])
        navigation.navigate('ListToDo')
      } else {
        Alert.alert("Verifique a hora e a data, podem estar invalidos!")  
      }
    } else {
      Alert.alert("Todos os campos precisam ser preenchidos!")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Container>
            <ContainerHeader>
              <ContainerLogo>
                <Logo source={imageLogo}/>
                <Icon name='back' color="#262833" size={30} onPress={() => navigation.goBack()}/>
              </ContainerLogo>
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
                keyboardType='default'
              />
            </ContainerInput>
            <ContainerInput>
              <TitleInputs>Horário limite</TitleInputs>
              <InputMask 
                placeholder='08:00' 
                icon='clock' 
                onChangeValue={(e) => setHourTask(e)}
                value={hourTask}
                format='HH:mm'
              />
            </ContainerInput>
            <ContainerInput>
              <TitleInputs>Data limite</TitleInputs>
              <InputMask 
                placeholder='14/02' 
                icon='calendar'
                onChangeValue={(e) => setDateTask(e)}
                value={dateTask}
                format='DD/MM'
              />
            </ContainerInput>
            <ContainerInput>
              <TitleInputs>Selecione uma empresa:</TitleInputs>
              <DivCompanys>
                <Label title='q2bank' selected={companyTask === "q2bank" ? true : false} onPress={() => setCompanyTask(companyTask === 'q2bank' ? '' : 'q2bank')}/>
                <Label title='q2pay' selected={companyTask === "q2pay" ? true : false} onPress={() => setCompanyTask(companyTask === 'q2pay' ? '' : 'q2pay')}/>
                <Label title='q2ingressos' selected={companyTask === "q2ingressos" ? true : false} onPress={() => setCompanyTask(companyTask === 'q2ingressos' ? '' : 'q2ingressos')}/>
              </DivCompanys>
            </ContainerInput>
            <Button title='Salvar tarefa' nameIcon='save' sizeIcon={16} inline={false} onPress={() => handleNewTask()}/>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default NewTask;