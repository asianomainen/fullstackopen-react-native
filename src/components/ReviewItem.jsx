import { format, parseISO } from 'date-fns'
import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  rating: {
    borderColor: theme.colors.primary,
    marginRight: 10,
    paddingTop: 10,
    borderWidth: 2,
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
  },
  data: {
    flexShrink: 1,
    paddingBottom: 5,
  },
  review: {
    marginTop: 5,
  },
})

const ReviewItem = ({ review }) => {
  const formattedDate = format(parseISO(review.createdAt), 'dd.MM.yyyy')

  return (
    <View style={styles.container}>
      <Text color="primary" fontWeight="bold" style={styles.rating}>
        {review.rating}
      </Text>
      <View style={styles.data}>
        <Text fontSize="subheading" fontWeight="bold">
          {review.user.username}
        </Text>
        <Text color="textSecondary">{formattedDate}</Text>
        <Text style={styles.review}>{review.text}</Text>
      </View>
    </View>
  )
}

export default ReviewItem
