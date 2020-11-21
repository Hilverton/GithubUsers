import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.lighterBackgroundColor};
`;

export const IconContainer = styled.View`
  margin-bottom: 50px;
`;

export const InputContainer = styled.View`
  height: 56px;
  width: 90%;
  position: relative;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  height: 56px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  font-size: 20px;
  padding: 0 20px;
`;

export const TextRequired = styled.Text`
  font-size: 14px;
  color: ${Colors.red};
  position: absolute;
  top: 18px;
  right: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 56px;
  width: 90%;
  background-color: ${Colors.yellow};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 5px;
`;
