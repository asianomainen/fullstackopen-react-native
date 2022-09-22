import { Picker } from '@react-native-picker/picker'

const FilterPicker = ({ sortBy, setSortBy }) => {
  return (
    <Picker
      selectedValue={sortBy}
      onValueChange={(itemValue) => setSortBy(itemValue)}
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  )
}

export default FilterPicker
