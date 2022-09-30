import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StarckNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StarckNavigator /> */}
      <MenuLateral />
    </NavigationContainer>
  )
}

export default App