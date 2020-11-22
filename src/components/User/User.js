import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { DataContext } from '../../context';

import Rectangle from '../Rectangle';

import { Colors } from '../../styles';
import { Container, Wrapper, ImageContainer, Image, Username } from './styles';

export default function User({ data }) {
  const { getViewerUser } = useContext(DataContext);
  const navigation = useNavigation();

  function go(username) {
    getViewerUser(username);
    navigation.navigate('Viewer');
  }

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
        <TouchableOpacity onPress={() => go(data.login)}>
          <Feather name='arrow-right' size={17} color={Colors.white} />
        </TouchableOpacity>
      </Wrapper>
    </Container>
  );
}
