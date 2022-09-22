import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'
import { GET_REPOSITORY } from '../graphql/queries'

const useNewReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW, {
    refetchQueries: [{ query: GET_REPOSITORY }],
    onError: (error) => {
      if (error.graphQLErrors[0]) {
        throw error.graphQLErrors[0]
      }
    },
  })

  const createReview = async (ownerName, repositoryName, rating, text) => {
    const review = { ownerName, repositoryName, rating, text }
    return await mutate({ variables: { review } })
  }

  return [createReview, result]
}

export default useNewReview
