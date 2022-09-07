import { Formik } from 'formik'
import * as yup from 'yup'
import SignInForm from './SignInForm'

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be atleast 3 characters long')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be atleast 8 characters long')
    .required('Password is required'),
})

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username
    const password = values.password

    if (username && password) {
      console.log('LOGGING IN')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
