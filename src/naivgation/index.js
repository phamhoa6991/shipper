import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
// import EnterPhone from '../screen/authen/enter-phone';
import Login from '../screen/authen/login';

export const navigationRef = React.createRef();

export default React.memo(() => {

  return (
    <NavigationContainer
      ref={navigationRef}
      >
      <RootNavigator />
    </NavigationContainer>
  );
})

const Stack = createStackNavigator();

const RootNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={
        "Login"
      }>
      <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
      {/* <Stack.Screen name="EnterPhone" component={EnterPhone} options={{ title: 'EnterPhone' }} /> */}
    </Stack.Navigator>
  );
})