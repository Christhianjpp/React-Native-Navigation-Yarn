import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  return (

    // <SafeAreaView>
    // </SafeAreaView>

    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>

      <Text style={styles.title} >Setting Screen</Text>
    </View>
  )
}
