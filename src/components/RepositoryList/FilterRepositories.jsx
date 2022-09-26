import { StyleSheet } from 'react-native'
import { Searchbar } from 'react-native-paper'

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 15,
    borderRadius: 5,
  },
})

const FilterRepositories = ({ filter, setFilter }) => {
  const onChangeSearch = (query) => setFilter(query)

  return (
    <Searchbar
      style={styles.container}
      placeholder="Search for repositories"
      onChangeText={onChangeSearch}
      value={filter}
    />
  )
}

export default FilterRepositories
