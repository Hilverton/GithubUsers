import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const List = styled.FlatList`
  background-color: ${Colors.lightBacgroundColor};
  width: 100%;
`;

export const Separator = styled.View`
  background-color: ${Colors.lighterBackgroundColor};
  height: 2px;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 18px;
`;
