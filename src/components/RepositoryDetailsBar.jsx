import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const RepositoryDetailsBar = ({ name, description, language }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      alignContent: 'space-between',
    },
    languageBox: {
      backgroundColor: theme.colors.primary,
      padding: 4,
      borderRadius: 3,
    },
    box: {
      marginBottom: 6,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.box} fontWeight="bold">
        {name}
      </Text>
      <Text style={styles.box} color="textSecondary">
        {description}
      </Text>
      <Text style={styles.languageBox} color="white">
        {language}
      </Text>
    </View>
  )
}

export default RepositoryDetailsBar
