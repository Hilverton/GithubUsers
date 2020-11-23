import styled from 'styled-components/native';
import { Colors } from '../../styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.backgroundColor};
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${Colors.white};
`;

export const Header = styled.View`
  height: 97px;
  width: 100%;
  padding: 10px 20px 0;
  background-color: ${Colors.backgroundColor};
  flex-direction: row;
  justify-content: space-between;
`;

export const Username = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const RightContainer = styled.View`
  flex-direction: row;
`;

export const RightText = styled.Text`
  font-size: 15px;
  color: ${Colors.white};
  margin-right: 5px;
  margin-left: -35px;
`;

export const Body = styled.View`
  flex: 2;
  background-color: ${Colors.lighterBackgroundColor};
`;

export const ImageContainer = styled.View`
  margin-top: -50px;
  margin-bottom: 35px;
  width: 115px;
  height: 115px;
  border-radius: 57px;
  border: 3px ${Colors.white};
  background-color: ${Colors.lighterBackgroundColor};
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ImageProfile = styled.Image`
  width: 112px;
  height: 112px;
  border-radius: 57px;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding: 0 30px;
  margin-bottom: 44px;
  position: relative;
`;

export const Name = styled.Text`
  font-size: 26px;
  margin: 13px 0 4px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const Email = styled.Text`
  font-size: 14px;
  color: ${Colors.white};
`;

export const City = styled.Text`
  font-size: 14px;
  color: ${Colors.white};
`;

export const PanelInfo = styled.View`
  height: 97px;
  width: 100%;
  margin-bottom: 43px;
  padding: 0 20px;
  background-color: ${Colors.grey};
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Number = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const Type = styled.Text`
  font-size: 15px;
  color: ${Colors.white};
`;

export const BioContainer = styled.View`
  width: 100%;
  padding: 0 30px 100px;
`;

export const Title = styled(Name)`
  margin-top: 13px;
  margin-bottom: 14px;
`;

export const BioText = styled.Text`
  width: 100%;
  align-self: center;
  font-size: 15px;
  color: ${Colors.white};
`;
