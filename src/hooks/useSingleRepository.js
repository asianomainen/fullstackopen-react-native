import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY, REPOSITORY_REVIEWS } from '../graphql/queries'

const useSingleRepository = () => {
  let { repoId } = useParams()

  const { data: repoData, loading: repoLoading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: repoId },
    fetchPolicy: 'cache-and-network',
  })

  const { data: repoReviews, loading: reviewsLoading } = useQuery(
    REPOSITORY_REVIEWS,
    {
      variables: { repositoryId: repoId },
      fetchPolicy: 'cache-and-network',
    }
  )

  return { repoData, repoLoading, repoReviews, reviewsLoading }
}

export default useSingleRepository
