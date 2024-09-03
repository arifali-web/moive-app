import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/tabs/Home';
import { MyTabs } from './screens/tabs';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Tabs'
    >
      <Stack.Screen name="Tabs" component={MyTabs} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} /> */}
    </Stack.Navigator>
    // </NavigationContainer>
  );
}