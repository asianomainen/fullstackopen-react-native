import { useApolloClient, useQuery } from '@apollo/client'
import Constants from 'expo-constants'
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native'
import { Link } from 'react-router-native'

import { CURRENT_USER } from '../../graphql/queries'
import useAuthStorage from '../../hooks/useAuthStorage'
import theme from '../../theme'
import Text from '../Text'
import AppBarTab from './AppBarTab'

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
  tabContainer: { padding: 10 },
})

const AppBar = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const user = useQuery(CURRENT_USER)

  if (user.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.gray} />
      </View>
    )
  }

  const handleSignOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        {user.data.me === null ? (
          <AppBarTab text="Sign in" link="signin" />
        ) : (
          <Link to="signout" onPress={handleSignOut}>
            <Text
              style={styles.tabContainer}
              color="white"
              fontSize="subheading"
              fontWeight="bold"
            >
              Sign out
            </Text>
          </Link>
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
