import React, { useEffect } from 'react'
import { Text, View } from 'react-native';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('tab1Screen')
    }, [])


    return (
        <View>
            <Text>Tab 1 Screen</Text>
        </View>
    )
}