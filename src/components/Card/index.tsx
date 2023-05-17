import React, { useState } from 'react';

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
  
  return (
    <Container>
      <IdentificationBar company={company}/>
      <Content>
        <ContentTop>
          <ContentTitle>
            {finished ? (
              <Icon name='checkbox-marked' size={36} color='#129E69' onPress={() => setFinished(!finished)}/>
            ) : (
              <Icon name='checkbox-blank-outline' size={36} color='#CCCED9' onPress={() => setFinished(!finished)}/>
            )}
            {/* trash-can-outline, checkbox-marked */}
            <Title numberOfLines={2} finished={finished}>{title}</Title>
          </ContentTitle>
          <Icon name='trash-can-outline' size={30} color='#E01644' onPress={handleDelete}/>
        </ContentTop>
        <ContentBottom>
          <IconBottom name='clock' size={16}/>
          <Text>{hour}</Text>
          <IconBottom name='calendar'size={16}/>
          <Text>{date}</Text>
          <Label selected={false} title={company}/>
        </ContentBottom>
      </Content>
    </Container>
  );
}

export default Card;