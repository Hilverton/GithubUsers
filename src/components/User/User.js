import React from 'react';
import { Feather } from '@expo/vector-icons';

import Rectangle from '../Rectangle';

import { Colors } from '../../styles';
import { Container, Wrapper, ImageContainer, Image, Username } from './styles';

export default function User({ data }) {
  return (
    <Container>
      <Wrapper>
        <Rectangle />
        <ImageContainer>
          <Image
            source={{
              uri: data.avatar,
            }}
          />
        </ImageContainer>
        <Username>#{data.login}</Username>
        <Feather name='arrow-right' size={17} color={Colors.white} />
      </Wrapper>
    </Container>
  );
}
