import React from 'react';
import { View, Text } from 'react-native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './Incidents';
import Detail from './Detail';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#E02041',
    accent: '#f1c40f',
  },
};

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Incidents} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}