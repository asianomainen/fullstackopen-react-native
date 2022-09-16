import { useQuery } from '@apollo/client'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { useParams } from 'react-router-native'

import { SINGLE_REPOSITORY } from '../graphql/queries'
import theme from '../theme'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})

const SingleRepository = () => {
  let { repoId } = useParams()

  const { data, loading } = useQuery(SINGLE_REPOSITORY, {
    variables: { repositoryId: repoId },
  })

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.gray} />
      </View>
    )
  }

  return (
    <View>
      <RepositoryItem item={data.repository} />
    </View>
  )
}

export default SingleRepository
