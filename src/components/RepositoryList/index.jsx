import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import useRepositories from '../../hooks/useRepositories'
import theme from '../../theme'
import RepositoryItem from './RepositoryItem'

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
const renderItem = ({ item }) => <RepositoryItem item={item} />

const RepositoryList = () => {
  const { repositories, loading } = useRepositories()

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
      renderItem={renderItem}
    />
  )
}

export default RepositoryList
