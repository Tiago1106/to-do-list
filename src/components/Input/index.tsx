import React, { useEffect, useState } from 'react'

import { InputContainer, Icon, Input as InputStyled} from './styles'

interface InputProps {
  value: string;
  onChangeValue: (value: string) => void;
  icon: string;
  isPassword: boolean;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ icon, isPassword, onChangeValue, value, placeholder }) => {
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
        placeholder={placeholder}
        value={value}
        secureTextEntry={isPassword}
        onChangeText={onChangeValue}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </InputContainer>
  )
}

export default Input;