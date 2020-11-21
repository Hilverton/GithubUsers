import React from 'react';
import { Feather } from '@expo/vector-icons';

import Rectagle from '../Rectangle';
import { Colors } from '../../styles';

import {
  Container,
  Title,
  Description,
  InfoContainer,
  StarContainer,
  StarNumber,
  LocksContainer,
} from './styles';

export default function GitRepo() {
  return (
    <Container>
      <Title>GithubUsers</Title>
      <Rectagle />
      <Description>Um projeto React Native</Description>
      <InfoContainer>
        <StarContainer>
          <Feather name='star' size={17} color={Colors.yellow} />
          <StarNumber>32</StarNumber>
        </StarContainer>
        <LocksContainer>
          <Feather name='unlock' size={17} color={Colors.green} />
          <Feather name='lock' size={17} color={Colors.red} />
        </LocksContainer>
      </InfoContainer>
    </Container>
  );
}
