import * as React from 'react';
import { View, Text } from 'react-native';
import Login from './src/screen/authen/login';
// import Naivgation from './src/'
function App() {
  return (
    <View style={{flex : 1}}>
      <Login />
      {/* <Naivgation /> */}
    </View>
  );
}

export default App;