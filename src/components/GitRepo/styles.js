import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const Container = styled.View`
  width: 100%;
  padding: 20px 28px 0;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.white};
  margin-bottom: 9px;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: ${Colors.white};
  margin-bottom: 14px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  margin-bottom: 34px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StarContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StarNumber = styled.Text`
  font-size: 15px;
  color: ${Colors.white};
  margin-left: 5px;
`;

export const LocksContainer = styled.View`
  width: 37px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
