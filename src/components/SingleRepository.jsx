import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'

import useSingleRepository from '../hooks/useSingleRepository'
import theme from '../theme'
import RepositoryItem from './RepositoryItem'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepository = () => {
  const { repoData, repoLoading, repoReviews, reviewsLoading, fetchMore } =
    useSingleRepository({ first: 8 })

  if (repoLoading || reviewsLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.gray} />
      </View>
    )
  }

  const onEndReach = () => {
    fetchMore()
  }

  const reviews = repoReviews
    ? repoReviews.repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      contentContainerStyle={{
        display: 'flex',
        flexGrow: 1,
      }}
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <ReviewItem review={item} buttons={false} />}
      ListHeaderComponent={() => <RepositoryItem item={repoData.repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default SingleRepository
