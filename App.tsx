import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomePage from './src/screens/HomePage/HomePage';

function MyTabs() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
      barStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
      activeColor="#b30289"
      inactiveColor="white"
      shifting={false}>
      <Tab.Screen name="Discover" component={HomePage} />
      <Tab.Screen name="Stars" component={HomePage} />
      <Tab.Screen name="Add" component={HomePage} />
      <Tab.Screen name="Cart" component={HomePage} />
      <Tab.Screen name="Profile" component={HomePage} />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
