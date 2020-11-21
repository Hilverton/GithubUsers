import React from 'react';

import { Header } from '../../components';

import { Container, Text } from './styles';

export default function Repository({ navigation }) {
  return (
    <>
      <Header back={() => navigation.goBack()}>10 repositórios</Header>
      <Container>
        <Text>Repository</Text>
      </Container>
    </>
  );
}
