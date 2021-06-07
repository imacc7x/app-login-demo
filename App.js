import 'react-native-gesture-handler';
import React from 'react';
import StartScreen from './src/screen/startScreen/index';
import TermServiceScreen from './src/screen/termServiceScreen/index';
import LoginScreen from './src/screen/loginScreen/index';
import RequestOtpScreen from './src/screen/requestOtpScreen/index';
import VerifyOtpScreen from './src/screen/verifyOtpScreen/index';
import SetPinScreen from './src/screen/setPinScreen/index';
import SetTouchIdScreen from './src/screen/setTouchIdScreen/index';
import PinScreen from './src/screen/pinScreen/index';

import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  const [loaded] = useFonts({
    Itim: require('./assets/fonts/Itim-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
        <Stack.Screen name="TermServiceScreen" component={TermServiceScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RequestOtpScreen" component={RequestOtpScreen} />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />
        <Stack.Screen name="SetPinScreen" component={SetPinScreen} />
        <Stack.Screen name="SetTouchIdScreen" component={SetTouchIdScreen} />
        <Stack.Screen name="PinScreen" component={PinScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;