import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/Home';
import { UserInfoScreen } from './screens/UserInfo';
import { BalanceScreen } from './screens/Balance';
import { HelpScreen } from './screens/Help';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const BalanceWithFetch = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('https://api.example.com/balance');
        const data = await response.json();
        setBalance(data.balance);
      } catch (error) {
        console.error('Ошибка загрузки баланса:', error);
      }
    };

    fetchBalance();
  }, []);

  return <BalanceScreen balance={balance} />;
};

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Главная' }} />
    <Tab.Screen name="Balance" component={BalanceWithFetch} options={{ title: 'Баланс' }} />
    <Tab.Screen name="Help" component={HelpScreen} options={{ title: 'Помощь' }} />
  </Tab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Главная" component={MainTabs} />
    <Drawer.Screen name="Профиль" component={UserInfoScreen} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="UserInfo" component={UserInfoScreen} options={{ title: 'Профиль' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
