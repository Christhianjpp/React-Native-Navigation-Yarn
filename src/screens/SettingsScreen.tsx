import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const { authState } = useContext(AuthContext)


  return (


    // <SafeAreaView>
    // </SafeAreaView>

    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20
    }}>

      <Text style={styles.title} >Setting Screen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {
        authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={80} color={colores.primary} />
      }



    </View>
  )
}
