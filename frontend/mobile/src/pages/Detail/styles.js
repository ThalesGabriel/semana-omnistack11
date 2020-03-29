import styled from 'styled-components';
import { View, ScrollView, Text, Image } from 'react-native'

export const Root = styled(View)`
  flex: 1;
`

export const Container = styled(View)`
  padding: 0 24px;
`

export const Header = styled(View)`
  background-color: rgba(224, 32, 65, 0.7);
`

export const StyledText = styled(Text)`
  font-size: 18px;
  color: #FFFFFF;
  font-weight: bold;
  align-self: center;
`

export const AvatarStyled = styled(Image)`
  width: 100px; 
  height: 100px
  margin-top: 10px;
  border-radius: 50px;
  align-self: center;
`