import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StarckNavigator } from './src/navigator/StackNavigator';
import { MenuLateral } from './src/navigator/MenuLateral';
import { AuthProvide } from './src/context/AuthContext';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StarckNavigator /> */}

        <MenuLateral />
      </AppState>
    </NavigationContainer>
  )
}


const AppState = ({ children }: any) => {
  return (
    <AuthProvide>
      {children}
    </AuthProvide>
  )

}

export default App