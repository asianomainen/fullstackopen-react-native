import { StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

const AppBarTab = ({ text, link }) => {
  return (
    <Link to={link}>
      <Text
        style={styles.container}
        color="white"
        fontSize="subheading"
        fontWeight="bold"
      >
        {text}
      </Text>
    </Link>
  )
}

export default AppBarTab
