import React, { useState, useContext } from 'react';
import { Alert, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { DataContext } from '../../context';

import {
  Container,
  IconContainer,
  InputContainer,
  Input,
  TextRequired,
  Button,
  Text,
} from './styles';
import { Colors } from '../../styles';

export default function Login({ navigation }) {
  const { getData } = useContext(DataContext);
  const [username, setUsername] = useState('');
  const [required, setRequired] = useState(false);

  function changeText(text) {
    if (required) setRequired(!required);
    setUsername(text);
  }

  async function handleButton() {
    if (username.length === 0) {
      setRequired(!required);
      return;
    }

    const response = await getData(username);
    if (response.ok) navigation.navigate('Main');
    else
      Alert.alert('Aviso', response.message, [{ text: 'OK' }], {
        cancelable: false,
      });
    setUsername('');
  }

  return (
    <Container>
      <IconContainer>
        <AntDesign name='github' size={97} color={Colors.yellow} />
      </IconContainer>
      <InputContainer>
        <Input
          placeholder='Usuário'
          value={username}
          onChangeText={changeText}
        />
        {required && <TextRequired>Campo obrigatório</TextRequired>}
      </InputContainer>
      <Button onPress={handleButton}>
        <Text>Entrar</Text>
        <View style={{ paddingTop: 2 }}>
          <AntDesign name='arrowright' size={24} color='black' />
        </View>
      </Button>
    </Container>
  );
}
