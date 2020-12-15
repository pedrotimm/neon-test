import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import ContactsScreen from './src/screens/Contact';
import HistoryScreen from './src/screens/History';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ENVIAR DINHEIRO" component={ContactsScreen} />
        <Stack.Screen name="HISTÓRICO DE ENVIOS" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}