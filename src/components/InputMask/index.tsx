import React, { useEffect, useState } from 'react'

import { InputContainer, Icon, Input as InputStyled} from './styles'
import { TextInput } from 'react-native';

interface InputProps {
  value: string;
  onChangeValue: (value: string) => void;
  icon: string;
  placeholder: string;
  format: string;
}

const InputMaskComponent: React.FC<InputProps> = ({ icon, onChangeValue, value, placeholder, format }) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [isComplete, setIsComplete] = useState<boolean>(false)
  
  useEffect(() => {
    if(value !== '') {
      setIsComplete(true)
    } else {
      setIsComplete(false)
    }
  },[value])

  return (
    <InputContainer isFocused={isFocused}>     
      <Icon name={icon} size={20} isFocused={isFocused} isComplete={isComplete}/>
      <InputStyled 
        options={{
          format: format,
        }}
        type={'datetime'}
        customTextInput={TextInput}
        placeholder={placeholder}
        value={value}
        maxLength={5}
        onChangeText={onChangeValue}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  )
}

export default InputMaskComponent;