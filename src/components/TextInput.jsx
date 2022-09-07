import { StyleSheet, TextInput as NativeTextInput } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  onError: {
    borderColor: theme.colors.error,
  },
})

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? [style, styles.onError] : [style]

  return <NativeTextInput style={textInputStyle} {...props} />
}

export default TextInput
