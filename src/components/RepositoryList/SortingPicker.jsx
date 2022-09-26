import { Picker } from '@react-native-picker/picker'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
})

const SortingPicker = ({ sortBy, setSortBy }) => {
  return (
    <Picker
      style={styles.container}
      selectedValue={sortBy}
      onValueChange={(itemValue) => setSortBy(itemValue)}
      prompt="Sort by..."
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  )
}

export default SortingPicker
