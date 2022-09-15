import { StyleSheet, View } from 'react-native'

import theme from '../../../theme'
import RepositoryDetailsBar from './RepositoryDetailsBar'
import RepositoryPicture from './RepositoryPicture'
import RepositoryStatsBar from './RepositoryStatsBar'

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      paddingLeft: 10,
      backgroundColor: theme.colors.white,
    },
    details: {
      flexDirection: 'row',
    },
  })

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.details}>
        <RepositoryPicture uri={item.ownerAvatarUrl} />
        <RepositoryDetailsBar
          name={item.fullName}
          description={item.description}
          language={item.language}
        />
      </View>
      <RepositoryStatsBar
        stars={item.stargazersCount}
        forks={item.forksCount}
        reviews={item.reviewCount}
        rating={item.ratingAverage}
      />
    </View>
  )
}

export default RepositoryItem
