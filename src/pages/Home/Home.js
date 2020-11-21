import React, { useEffect, useContext } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { DataContext } from '../../context';

import { Rectangle } from '../../components';
import { Colors } from '../../styles';

import {
  Container,
  Header,
  Username,
  ExitContainer,
  ExitText,
  Body,
  ImageProfile,
  UserContainer,
  Name,
  Email,
  City,
  PanelInfo,
  InfoContainer,
  Number,
  Type,
  BioContainer,
  BioText,
  Title,
} from './styles';

export default function Home({ navigation }) {
  const { user } = useContext(DataContext);

  return (
    <Container style={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
      <ScrollView>
        <Header>
          <Username>#{user.login}</Username>
          <ExitContainer>
            <ExitText>Sair</ExitText>
            <Feather name='log-out' size={24} color={Colors.red} />
          </ExitContainer>
        </Header>
        <Body>
          <ImageProfile
            source={{
              uri: user.avatar_url,
            }}
          />

          <UserContainer>
            <Name>{user.name}</Name>
            <Rectangle />
            {user.email && <Email>{user.email}</Email>}
            {user.location && <City>{user.location}</City>}
          </UserContainer>

          <PanelInfo>
            <InfoContainer onPress={() => navigation.navigate('Seguidores')}>
              <Number>{user.followers}</Number>
              <Type>Seguidores</Type>
            </InfoContainer>

            <InfoContainer onPress={() => navigation.navigate('Seguindo')}>
              <Number>{user.following}</Number>
              <Type>Seguindo</Type>
            </InfoContainer>

            <InfoContainer onPress={() => navigation.navigate('Repos')}>
              <Number>{user.public_repos}</Number>
              <Type>Repos</Type>
            </InfoContainer>
          </PanelInfo>

          <BioContainer>
            <Title>Bio</Title>
            <Rectangle />
            <BioText>{user.bio}</BioText>
          </BioContainer>
        </Body>
      </ScrollView>
    </Container>
  );
}
