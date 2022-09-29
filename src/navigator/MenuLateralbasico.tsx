import { createDrawerNavigator } from '@react-navigation/drawer';
import { StarckNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import React from 'react'

export type DrawerParams ={
    StarckNavigator: undefined,
    SettingsScreen: undefined
}

const Drawer = createDrawerNavigator<DrawerParams>();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StarckNavigator" component={StarckNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}