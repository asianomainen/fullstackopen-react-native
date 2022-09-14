import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useSignIn from '../../hooks/useSignIn'
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
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn({ username, password })
      navigate('../', { replace: true })
    } catch (e) {
      console.log(e)
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
