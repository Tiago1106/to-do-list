import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard  } from 'react-native'

import { Container, Logo, Text, ContainerButton } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import imageLogo from '../../assets/logo.png';

interface ScreenProps {
  navigation: any;
}

const Auth: React.FC<ScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const HandleSubmit = () => {
    navigation.navigate('ListToDo')
  }

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="never"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Logo source={imageLogo}/>
            <Text>Olá, que bom te ver de novo. Vamos começar?</Text>
            <Input 
              icon='user'
              value={username}
              placeholder='Username'
              onChangeValue={(value: string) => setUsername(value)}
              isPassword={false}
            />
            <Input 
              icon='lock'
              value={password}
              placeholder='Password'
              onChangeValue={(value: string) => setPassword(value)}
              isPassword
            />
            <ContainerButton>
              <Button inline={false} title='Entrar' onPress={() => HandleSubmit()}/>
            </ContainerButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default Auth;