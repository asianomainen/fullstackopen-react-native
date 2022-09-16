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
  navigate(`../${item.id}`, { replace: true })
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
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={(item) => renderItem(item, navigate)}
    />
  )
}

const RepositoryList = () => {
  const { repositories, loading } = useRepositories()
  const navigate = useNavigate()

  return (
    <RepositoryListContainer
      repositories={repositories}
      loading={loading}
      navigate={navigate}
    />
  )
}

export default RepositoryList
