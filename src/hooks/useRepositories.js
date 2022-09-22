import { useQuery } from '@apollo/client'
import { useState } from 'react'

import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = (orderBy, orderDirection) => {
  const [repositories, setRepositories] = useState()

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: 'cache-and-network',
    onCompleted: () => setRepositories(data.repositories),
  })

  return { repositories, loading }
}

export default useRepositories
