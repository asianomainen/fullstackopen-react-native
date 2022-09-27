import { useQuery } from '@apollo/client'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { GET_CURRENT_USER } from '../graphql/queries'
import theme from '../theme'
import ReviewItem from './ReviewItem'
import Text from './Text'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text: {
    color: theme.colors.textPrimary,
    textAlign: 'center',
    padding: 15,
  },
  textContainer: {
    backgroundColor: theme.colors.white,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const UserReviews = () => {
  const navigate = useNavigate()
  const user = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  })

  if (user.loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.gray} />
      </View>
    )
  }

  const reviews = user
    ? user.data.me.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <View>
      {reviews.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text} fontSize="subheading" fontWeight="bold">
            You haven't written any reviews
          </Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={{
            display: 'flex',
            flexGrow: 1,
          }}
          data={reviews}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <ReviewItem review={item} buttons={true} navigate={navigate} />
          )}
          ItemSeparatorComponent={ItemSeparator}
        />
      )}
    </View>
  )
}

export default UserReviews
