import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const List = styled.FlatList`
  background-color: ${Colors.lightBacgroundColor};
  width: 100%;
`;

export const Separator = styled.View`
  background-color: ${Colors.lighterBackgroundColor};
  height: 2px;
  width: 100%;
`;
