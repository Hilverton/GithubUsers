import React, { useContext } from 'react';
import { Platform, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import { DataContext } from '../../context';

import { Rectangle } from '../../components';
import { Colors } from '../../styles';

import {
  Container,
  Header,
  Username,
  RightContainer,
  RightText,
  Body,
  ImageContainer,
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
  const { user, exit, viewerUser, save } = useContext(DataContext);
  const route = useRoute();

  function exitUser() {
    exit();
    navigation.navigate('Login');
  }

  function saveUser() {
    exit();
    save();
    navigation.reset({ routes: [{ name: 'Home' }] });
  }

  const check = route.name === 'Home';

  return (
    <Container style={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
      <ScrollView>
        <Header>
          {!check ? (
            <>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name='arrow-left' size={24} color={Colors.white} />
              </TouchableOpacity>
              <Username>#{check ? user.login : viewerUser.login}</Username>
              <RightContainer>
                <RightText>Salvar</RightText>
                <TouchableOpacity onPress={saveUser}>
                  <Feather name='log-in' size={24} color={Colors.green} />
                </TouchableOpacity>
              </RightContainer>
            </>
          ) : (
            <>
              <Username>#{check ? user.login : viewerUser.login}</Username>
              <RightContainer>
                <RightText>Sair</RightText>
                <TouchableOpacity onPress={exitUser}>
                  <Feather name='log-out' size={24} color={Colors.red} />
                </TouchableOpacity>
              </RightContainer>
            </>
          )}
        </Header>
        <Body>
          <ImageContainer>
            <ImageProfile
              source={{
                uri: check ? user.avatar_url : viewerUser.avatar_url,
              }}
            />
          </ImageContainer>

          <UserContainer>
            <Name>{check ? user.name : viewerUser.name}</Name>
            <Rectangle />
            <Email>{check ? user.email : viewerUser.email}</Email>
            <City>{check ? user.location : viewerUser.location}</City>
          </UserContainer>

          <PanelInfo>
            <InfoContainer
              onPress={
                check ? () => navigation.navigate('Seguidores') : () => {}
              }
            >
              <Number>{check ? user.followers : viewerUser.followers}</Number>
              <Type>Seguidores</Type>
            </InfoContainer>

            <InfoContainer
              onPress={check ? () => navigation.navigate('Seguindo') : () => {}}
            >
              <Number>{check ? user.following : viewerUser.following}</Number>
              <Type>Seguindo</Type>
            </InfoContainer>

            <InfoContainer
              onPress={check ? () => navigation.navigate('Repos') : () => {}}
            >
              <Number>
                {check ? user.public_repos : viewerUser.public_repos}
              </Number>
              <Type>Repos</Type>
            </InfoContainer>
          </PanelInfo>

          <BioContainer>
            <Title>Bio</Title>
            <Rectangle />
            <BioText>{check ? user.bio : viewerUser.bio}</BioText>
          </BioContainer>
        </Body>
      </ScrollView>
    </Container>
  );
}
