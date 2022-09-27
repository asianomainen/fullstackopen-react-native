import React, { useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  View,
} from 'react-native'
import { useNavigate } from 'react-router-native'
import { useDebounce } from 'use-debounce'

import useRepositories from '../../hooks/useRepositories'
import theme from '../../theme'
import RepositoryItem from '../RepositoryItem'
import ListHeader from './ListHeader'

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
      <RepositoryItem item={item} navigate={navigate} />
    </Pressable>
  )
}

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props

    return (
      <ListHeader
        sortBy={props.sortBy}
        setSortBy={props.setSortBy}
        filter={props.filter}
        setFilter={props.setFilter}
      />
    )
  }

  render() {
    const props = this.props

    const repositoryNodes = props.repositories
      ? props.repositories.edges.map((edge) => edge.node)
      : []

    if (props.loading) {
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
        renderItem={(item) => renderItem(item, props.navigate)}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={this.renderHeader}
      />
    )
  }
}

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState('latest')
  const [filter, setFilter] = useState('')
  const [filterKeyword] = useDebounce(filter, 500)

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

  const { repositories, loading, fetchMore } = useRepositories({
    first: 8,
    orderBy,
    orderDirection,
    filterKeyword,
  })
  const navigate = useNavigate()

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      navigate={navigate}
      sortBy={sortBy}
      setSortBy={setSortBy}
      filter={filter}
      setFilter={setFilter}
      onEndReach={onEndReach}
    />
  )
}

export default RepositoryList
