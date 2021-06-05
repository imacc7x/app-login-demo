import 'react-native-gesture-handler';
import React from 'react';
import StartScreen from './src/screen/startScreen/index';
import TermServiceScreen from './src/screen/termServiceScreen/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="TermServiceScreen" component={TermServiceScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;