import { createDrawerNavigator } from '@react-navigation/drawer';
import { StarckNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import React from 'react'
import { useWindowDimensions } from 'react-native';



const Drawer = createDrawerNavigator();

export const MenuLateral = () => {


    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator
            screenOptions={{
                // drawerPosition: 'right',
                headerShown: false,
                drawerType: width >= 768 ? 'permanent' : 'front'
            }}
        >

            <Drawer.Screen name="StarckNavigator" options={{ title: 'Home' }} component={StarckNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Setting' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}