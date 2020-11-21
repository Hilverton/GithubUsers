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
  padding: 0 10px;
  background-color: ${Colors.backgroundColor};
  flex-direction: row;
  justify-content: space-between;
`;

export const Username = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const ExitContainer = styled.View`
  flex-direction: row;
`;

export const ExitText = styled.Text`
  font-size: 15px;
  color: ${Colors.white};
  margin-right: 5px;
`;

export const Body = styled.View`
  flex: 2;
  background-color: ${Colors.lighterBackgroundColor};
`;

export const ImageProfile = styled.Image`
  margin-top: -50px;
  margin-bottom: 45px;
  width: 115px;
  height: 115px;
  border-radius: 57px;
  border: 3px ${Colors.white};
  align-self: center;
`;

export const UserContainer = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 44px;
`;

export const Name = styled.Text`
  font-size: 26px;
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
  margin-bottom: 53px;
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
  padding-bottom: 100px;
`;

export const BioText = styled.Text`
  width: 90%;
  align-self: center;
  font-size: 15px;
  color: ${Colors.white};
`;

export const Title = styled(Name)`
  margin-left: 16px;
  margin-bottom: 14px;
`;
