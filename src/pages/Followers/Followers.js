import React from 'react';

import { Header } from '../../components';

import { Container, Text } from './styles';

export default function Followers({ navigation }) {
  return (
    <>
      <Header back={() => navigation.goBack()}>10 seguidores</Header>
      <Container>
        <Text>Followers</Text>
      </Container>
    </>
  );
}
