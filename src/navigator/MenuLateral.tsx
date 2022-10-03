import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StarckNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import React from 'react'
import { useWindowDimensions, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { Tabs } from './Tabs';

import Icon from 'react-native-vector-icons/Ionicons';

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
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>

            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://www.caribbeangamezone.com/wp-content/uploads/2018/03/avatar-placeholder.png'
                    }}
                    style={styles.avatar}
                />

            </View>

            {/* Opciones de menú */}

            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',

                    }}
                    onPress={() => navigation.navigate('Tabs')}

                >

                    <Icon name="airplane-outline" size={25} color={colores.primary} />


                    <Text style={styles.menuTexto}> Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',

                    }}
                    onPress={() => navigation.navigate('SettingsScreen')}

                >

                    <Icon name="settings-outline" size={25} color={colores.primary} />

                    <Text style={styles.menuTexto}> Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}