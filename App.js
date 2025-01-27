import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from './screens/Home'
import {UserInfoScreen} from './screens/UserInfo'
import {BalanceScreen} from './screens/Balance'
import {HelpScreen} from './screens/Help'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главное окно' }} />
        <Stack.Screen name="Balance" component={BalanceScreen} options={{ title: 'Счет' }} />
        <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Помощь' }} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} options={{ title: 'Инфо' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

