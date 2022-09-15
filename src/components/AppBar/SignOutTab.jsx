import { useApolloClient } from '@apollo/client'
import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import useAuthStorage from '../../hooks/useAuthStorage'
import Text from '../Text'

const styles = StyleSheet.create({
  tabContainer: { padding: 10 },
})

const SignOutTab = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const handleSignOut = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
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
  )
}

export default SignOutTab
