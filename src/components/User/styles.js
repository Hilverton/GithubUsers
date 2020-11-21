import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const Container = styled.View`
  width: 100%;
  padding: 20px 0 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Wrapper = styled.View`
  width: 100%;
  padding: 0 30px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ImageContainer = styled.View`
  width: 64px;
  height: 64px;
  border: 3px ${Colors.white};
  border-radius: 32px;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 61px;
  height: 61px;
  border-radius: 30.5px;
`;

export const Username = styled.Text`
  width: 150px;
  font-size: 16px;
  color: ${Colors.white};
`;
