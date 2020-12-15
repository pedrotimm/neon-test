import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './src/screens/Home';
import ContactsScreen from './src/screens/Contact';
import HistoryScreen from './src/screens/History';

const Stack = createStackNavigator();

export default function App() {
  const screenOptions = {
    headerTransparent: true,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="HOME" component={HomeScreen} options={{  title: '' }}/>
        <Stack.Screen name="ENVIAR DINHEIRO" component={ContactsScreen} options={{ title: 'ENVIAR DINHEIRO' }}/>
        <Stack.Screen name="HISTÓRICO DE ENVIOS" component={HistoryScreen} options={{ title: 'HISTÓRICO DE ENVIOS' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}