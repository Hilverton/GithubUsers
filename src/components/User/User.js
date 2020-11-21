import React from 'react';
import { Feather } from '@expo/vector-icons';

import Rectangle from '../Rectangle';

import { Colors } from '../../styles';
import { Container, Wrapper, ImageContainer, Image, Username } from './styles';

export default function User() {
  return (
    <Container>
      <Wrapper>
        <Rectangle />
        <ImageContainer>
          <Image
            source={{
              uri:
                'https://avatars0.githubusercontent.com/u/44450158?s=460&u=b34b936043c7230b8054c0fdcd5bf29c8dd5e5d5&v=4',
            }}
          />
        </ImageContainer>
        <Username>#Hilverton</Username>
        <Feather name='arrow-right' size={17} color={Colors.white} />
      </Wrapper>
    </Container>
  );
}
