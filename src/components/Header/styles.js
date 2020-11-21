import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const Container = styled.View`
  width: 100%;
  height: 90px;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.backgroundColor};
`;

export const HeaderLeft = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 17px;
  color: ${Colors.white};
`;

export const HeaderRight = styled.View`
  width: 40px;
  height: 40px;
`;
