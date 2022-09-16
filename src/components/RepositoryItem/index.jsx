import * as Linking from 'expo-linking'
import { Pressable, StyleSheet, View } from 'react-native'

import theme from '../../theme'
import Text from '../Text'
import RepositoryDetailsBar from './RepositoryDetailsBar'
import RepositoryPicture from './RepositoryPicture'
import RepositoryStatsBar from './RepositoryStatsBar'

const RepositoryItem = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: theme.colors.white,
    },
    details: {
      flexDirection: 'row',
    },
    button: {
      padding: 15,
      marginBottom: 15,
      marginRight: 5,
      marginLeft: 5,
      borderRadius: 5,
      backgroundColor: theme.colors.primary,
      alignItems: 'center',
    },
  })

  const onSubmit = (url) => {
    Linking.openURL(url)
  }

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
      {item.url && (
        <Pressable style={styles.button} onPress={() => onSubmit(item.url)}>
          <Text color="white" fontWeight="bold">
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  )
}

export default RepositoryItem
