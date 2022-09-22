import { useApolloClient, useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations'
import useAuthStorage from '../hooks/useAuthStorage'

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN, {
    onError: (error) => {
      if (error.graphQLErrors[0]) {
        throw error.graphQLErrors[0]
      }
    },
  })
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const signIn = async (username, password) => {
    const credentials = { username, password }
    const { data } = await mutate({ variables: { credentials } })
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
  }

  return [signIn, result]
}

export default useSignIn
