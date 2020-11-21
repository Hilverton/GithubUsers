import React, { useEffect } from 'react';
import { Platform, ScrollView, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
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
  return (
    <Container style={{ paddingTop: Platform.OS === 'android' ? 30 : 0 }}>
      <ScrollView>
        <Header>
          <Username>#Hilverton</Username>
          <ExitContainer>
            <ExitText>Sair</ExitText>
            <Feather name='log-out' size={24} color={Colors.red} />
          </ExitContainer>
        </Header>
        <Body>
          <ImageProfile
            source={{
              uri:
                'https://avatars0.githubusercontent.com/u/44450158?s=460&u=b34b936043c7230b8054c0fdcd5bf29c8dd5e5d5&v=4',
            }}
          />

          <UserContainer>
            <Name>Hilverton Cesar</Name>
            <Rectangle />
            <Email>hilvertoncesar@gmail.com</Email>
            <City>Maceió/AL</City>
          </UserContainer>

          <PanelInfo>
            <InfoContainer onPress={() => navigation.navigate('Seguidores')}>
              <Number>32</Number>
              <Type>Seguidores</Type>
            </InfoContainer>

            <InfoContainer onPress={() => navigation.navigate('Seguindo')}>
              <Number>32</Number>
              <Type>Seguindo</Type>
            </InfoContainer>

            <InfoContainer onPress={() => navigation.navigate('Repos')}>
              <Number>32</Number>
              <Type>Repos</Type>
            </InfoContainer>
          </PanelInfo>

          <BioContainer>
            <Title>Bio</Title>
            <Rectangle />
            <BioText>
              Lorem ipsun Lorem ipsunLorem ipsun Lorem ipsun Lorem ipsun Lorem
              ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun
              Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem
              ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun
              Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem ipsun Lorem
              ipsun Lorem ipsun Lorem ipsun
            </BioText>
          </BioContainer>
        </Body>
      </ScrollView>
    </Container>
  );
}
