import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'
import { REPOSITORY_REVIEWS, SINGLE_REPOSITORY } from '../graphql/queries'

const useSingleRepository = () => {
  let { repoId } = useParams()

  const { data: repoData, loading: repoLoading } = useQuery(SINGLE_REPOSITORY, {
    variables: { repositoryId: repoId },
  })

  const { data: repoReviews, loading: reviewsLoading } = useQuery(
    REPOSITORY_REVIEWS,
    {
      variables: { repositoryId: repoId },
    }
  )

  return { repoData, repoLoading, repoReviews, reviewsLoading }
}

export default useSingleRepository
