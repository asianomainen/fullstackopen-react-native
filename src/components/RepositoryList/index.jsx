import { useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import { useNavigate } from 'react-router-native'

import useRepositories from '../../hooks/useRepositories'
import theme from '../../theme'
import RepositoryItem from '../RepositoryItem'
import FilterPicker from './FilterPicker'

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

const handlePress = ({ item }, navigate) => {
  navigate(`/${item.id}`, { replace: true })
}

const renderItem = ({ item }, navigate) => {
  return (
    <Pressable onPress={() => handlePress({ item }, navigate)}>
      <RepositoryItem item={item} />
    </Pressable>
  )
}

export const RepositoryListContainer = ({
  repositories,
  loading,
  navigate,
  sortBy,
  setSortBy,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.gray} />
      </View>
    )
  }

  return (
    <FlatList
      contentContainerStyle={{
        display: 'flex',
        flexGrow: 1,
      }}
      keyExtractor={({ id }) => id}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => renderItem(item, navigate)}
      ListHeaderComponent={
        <FilterPicker sortBy={sortBy} setSortBy={setSortBy} />
      }
    />
  )
}

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState('latest')

  let orderBy = 'CREATED_AT'
  let orderDirection = 'DESC'

  if (sortBy === 'latest') {
    orderBy = 'CREATED_AT'
    orderDirection = 'DESC'
  } else if (sortBy === 'highest') {
    orderBy = 'RATING_AVERAGE'
    orderDirection = 'DESC'
  } else {
    orderBy = 'RATING_AVERAGE'
    orderDirection = 'ASC'
  }

  const { repositories, loading } = useRepositories(orderBy, orderDirection)
  const navigate = useNavigate()

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      navigate={navigate}
      sortBy={sortBy}
      setSortBy={setSortBy}
    />
  )
}

export default RepositoryList
