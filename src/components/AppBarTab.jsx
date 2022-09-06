import { StyleSheet } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
})

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles} onPress={() => window.alert('Pressed')}>
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {text}
      </Text>
    </Pressable>
  )
}

export default AppBarTab
