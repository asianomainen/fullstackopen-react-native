import { useField } from 'formik'
import { StyleSheet } from 'react-native'
import theme from '../../../theme'
import Text from '../../Text'

import TextInput from './TextInput'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
    borderColor: theme.colors.error,
  },
  input: {
    padding: 10,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.gray,
  },
})

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.input}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  )
}

export default FormikTextInput
