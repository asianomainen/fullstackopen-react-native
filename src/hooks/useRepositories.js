import { useQuery } from '@apollo/client'
import { useState } from 'react'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (variables) => {
  const [repositories, setRepositories] = useState()

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
    onCompleted: () => setRepositories(data.repositories),
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return {
    repositories,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }
}

export default useRepositories
