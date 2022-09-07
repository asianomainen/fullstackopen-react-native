import Constants from 'expo-constants'
import { ScrollView, StyleSheet, View } from 'react-native'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        <AppBarTab text="Sign in" link="signin" />
      </ScrollView>
    </View>
  )
}

export default AppBar
