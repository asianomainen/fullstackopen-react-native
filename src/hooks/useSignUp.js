import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'

const useSignUp = () => {
  const [createUser, createResult] = useMutation(CREATE_USER, {
    onError: (error) => {
      if (error.graphQLErrors[0]) {
        console.log(error.graphQLErrors[0].message)
      }
    },
  })

  const signUp = async (username, password) => {
    const user = { username, password }
    await createUser({ variables: { user } })
  }

  return [signUp, createResult]
}

export default useSignUp
