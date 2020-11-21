import React from 'react';

import { Header } from '../../components';

import { Container, Text } from './styles';

export default function Following({ navigation }) {
  return (
    <>
      <Header back={() => navigation.goBack()}>Seguindo 10</Header>
      <Container>
        <Text>Following</Text>
      </Container>
    </>
  );
}
