import React from 'react';
import {
  NativeBaseProvider,
} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/Screens/Home';
import ContactsScreen from './src/Screens/Contacts';
import AddNewContact from './src/Screens/AddNewContact';
import ComposeEmailScreen from './src/Screens/ComposeEmail';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Contacts" component={ContactsScreen} />
          <Tab.Screen name="ComposeEmail" component={ComposeEmailScreen} />
          <Tab.Screen name="AddNewContact" component={AddNewContact} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
