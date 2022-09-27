import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-native'
import { GET_REPOSITORY, GET_REPOSITORY_REVIEWS } from '../graphql/queries'

const useSingleRepository = (variables) => {
  const { repoId } = useParams()

  const { data: repoData, loading: repoLoading } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: repoId },
    fetchPolicy: 'cache-and-network',
  })

  const {
    data: repoReviews,
    loading: reviewsLoading,
    fetchMore,
    ...result
  } = useQuery(GET_REPOSITORY_REVIEWS, {
    variables: { repositoryId: repoId, first: variables.first },
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore =
      !reviewsLoading && repoReviews?.repository.reviews.pageInfo.endCursor

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: repoReviews.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repoData,
    repoLoading,
    repoReviews,
    reviewsLoading,
    fetchMore: handleFetchMore,
    ...result,
  }
}

export default useSingleRepository
