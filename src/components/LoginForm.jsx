import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import Text from './Text'

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: theme.colors.white,
  },
  input: {
    padding: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.gray,
  },
  button: {
    padding: 15,
    marginBottom: 12,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
})

const LoginForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        style={styles.input}
        name="username"
        placeholder="Username"
      />
      <FormikTextInput
        secureTextEntry
        style={styles.input}
        name="password"
        placeholder="Password"
      />
      <Pressable style={styles.button} onPress={onSubmit}>
        <Text color="white" fontWeight="bold">
          Sign in
        </Text>
      </Pressable>
    </View>
  )
}

export default LoginForm
