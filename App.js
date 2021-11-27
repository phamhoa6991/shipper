import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/authen/login';

function App() {
  return (
    <View style={{flex : 1}}>
      <Login />
    </View>
  );
}

export default App;