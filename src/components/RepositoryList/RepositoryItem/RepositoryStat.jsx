import { StyleSheet, View } from 'react-native'
import Text from '../../Text'

const RepositoryStat = ({ stat, text }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      flex: 1,
      alignItems: 'center',
    },
  })

  if (stat > 1000) {
    //Round to one decimal point
    stat = Math.round((stat / 1000) * 10) / 10
    return (
      <View style={styles.container}>
        <Text fontWeight="bold">{stat}k</Text>
        <Text color="textSecondary">{text}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{stat}</Text>
      <Text color="textSecondary">{text}</Text>
    </View>
  )
}

export default RepositoryStat
