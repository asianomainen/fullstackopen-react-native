import { useMutation } from '@apollo/client'
import { format, parseISO } from 'date-fns'
import { Alert, Pressable, StyleSheet, View } from 'react-native'
import { DELETE_REVIEW } from '../graphql/mutations'
import { GET_CURRENT_USER } from '../graphql/queries'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  details: {
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    flexGrow: 1,
  },
  viewButton: {
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
  },
})

const handleView = (repoId, navigate) => {
  navigate(`/${repoId}`, { replace: true })
}

const handleDelete = (repoId, mutate) => {
  Alert.alert('Delete review', 'Are you sure you want to delete this review?', [
    {
      text: 'Cancel',
    },
    {
      text: 'Delete',
      onPress: async () =>
        await mutate({ variables: { deleteReviewId: repoId } }),
    },
  ])
}

const ReviewItem = ({ review, buttons, navigate }) => {
  const [mutate] = useMutation(DELETE_REVIEW, {
    refetchQueries: [
      {
        query: GET_CURRENT_USER,
        variables: { includeReviews: true },
        fetchPolicy: 'cache-and-network',
      },
    ],
    onError: (error) => {
      if (error.graphQLErrors[0]) {
        throw error.graphQLErrors[0]
      }
    },
  })

  const formattedDate = format(parseISO(review.createdAt), 'dd.MM.yyyy')

  return (
    <View style={styles.container}>
      <View style={styles.details}>
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
      {buttons && (
        <View style={styles.buttons}>
          <Pressable
            style={[styles.button, styles.viewButton]}
            onPress={() => handleView(review.repositoryId, navigate)}
          >
            <Text color="white" fontWeight="bold">
              View repository
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.deleteButton]}
            onPress={() => handleDelete(review.id, mutate)}
          >
            <Text color="white" fontWeight="bold">
              Delete review
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default ReviewItem
