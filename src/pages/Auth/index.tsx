import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

import { Container, Logo, Text, ContainerButton } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import imageLogo from '../../assets/logo.png';


const Auth: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const HandleSubmit = () => {
    console.log('Submit')
    console.log(username, password)
  }

  return (
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
            <Button title='Entrar' onPress={() => HandleSubmit()}/>
          </ContainerButton>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Auth;