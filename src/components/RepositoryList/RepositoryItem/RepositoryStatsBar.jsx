import { StyleSheet, View } from 'react-native'
import RepositoryStat from './RepositoryStat'

const RepositoryStatsBar = ({ stars, forks, reviews, rating }) => {
  const styles = StyleSheet.create({
    container: {
      padding: 5,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  })

  return (
    <View style={styles.container}>
      <RepositoryStat stat={stars} text="Stars" />
      <RepositoryStat stat={forks} text="Forks" />
      <RepositoryStat stat={reviews} text="Reviews" />
      <RepositoryStat stat={rating} text="Rating" />
    </View>
  )
}

export default RepositoryStatsBar
