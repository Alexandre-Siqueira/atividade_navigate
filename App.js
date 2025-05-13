import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddNoteScreen from './screens/AddNoteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Minhas Notas' }} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'Nova Nota' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}