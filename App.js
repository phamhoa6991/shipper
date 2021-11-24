import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen from './src/screen';

function App() {
  return (
    <View>
      <Screen />
    </View>
  );
}

export default App;