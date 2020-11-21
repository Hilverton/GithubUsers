import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, HeaderLeft, Button, Title, HeaderRight } from './styles';

export default function Header({ children, back }) {
  return (
    <Container>
      <HeaderLeft>
        <Button onPress={back}>
          <Feather name='arrow-left' size={24} color='white' />
        </Button>
      </HeaderLeft>
      <Title>{children}</Title>
      <HeaderRight />
    </Container>
  );
}
