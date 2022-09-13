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

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry name="password" placeholder="Password" />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text color="white" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

export default LoginForm
