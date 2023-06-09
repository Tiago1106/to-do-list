import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'

import { Container, Logo, Text, ContainerButton } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import imageLogo from '../../assets/logo.png';

import { useAuth } from '../../hooks/auth';

const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  
  const { signIn } = useAuth();

  const HandleSubmit = useCallback(async (email: string, password: string) => {
    
    if(email && password.length>=6) {
      await signIn({
        email: email,
        password: password,
      });
    } else {
      Alert.alert("Algo deu errado, tente novamente!")
    }
  },[signIn])

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside} >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled={true}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Container>
            <Logo source={imageLogo}/>
            <Text>Olá, que bom te ver de novo. Vamos começar?</Text>
            <Input 
              icon='user'
              value={email}
              placeholder='Email'
              onChangeValue={(value: string) => setEmail(value)}
              isPassword={false}
              keyboardType="email-address"
            />
            <Input 
              icon='lock'
              value={password}
              placeholder='Password'
              onChangeValue={(value: string) => setPassword(value)}
              isPassword
              keyboardType="default"
            />
            <ContainerButton>
              <Button inline={false} title='Entrar' onPress={() => HandleSubmit(email, password)}/>
            </ContainerButton>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

export default Auth;