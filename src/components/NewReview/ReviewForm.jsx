import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'
import Text from '../Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: theme.colors.white,
  },
  button: {
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
})

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="owner" placeholder="Repository owner name" />
      <FormikTextInput name="name" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput
        name="review"
        placeholder="Review (optional)"
        multiline={true}
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text color="white" fontWeight="bold">
          Create a review
        </Text>
      </Pressable>
    </View>
  )
}

export default ReviewForm
