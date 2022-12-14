import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {


    const { top } = useSafeAreaInsets()

    useEffect(() => {
        console.log('tab1Screen')
    }, [])


    return (
        <View style={{

            ...styles.globalMargin,
            marginTop: top + 10
        }}>

            <Text style={styles.title}>Iconos</Text>

            <Text>

                <TouchableIcon iconName="airplane-outline" />
                <TouchableIcon iconName="attach-outline" />
                <TouchableIcon iconName="bonfire-outline" />
            </Text>

        </View>
    )
}
