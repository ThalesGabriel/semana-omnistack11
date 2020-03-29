import styled from 'styled-components';
import { View, ScrollView, Text } from 'react-native'


export const Container = styled(View)`
  flex: 1;
  padding: 0 24px ;

`
export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const HeaderText = styled(Text)`
  font-size: 15px;
  color: #737380;
`

export const Title = styled(Text)`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`

export const Description = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`