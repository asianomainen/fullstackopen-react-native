import { useQuery } from '@apollo/client'
import Constants from 'expo-constants'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'

import { CURRENT_USER } from '../../graphql/queries'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import SignOutTab from './SignOutTab'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})

const AppBar = () => {
  const user = useQuery(CURRENT_USER)

  if (user.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.gray} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        {user.data.me === null ? (
          <>
            <AppBarTab text="Sign in" link="/signin" />
            <AppBarTab text="Sign up" link="/signup" />
          </>
        ) : (
          <>
            <AppBarTab text="Create a review" link="/review" />
            <SignOutTab />
          </>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
