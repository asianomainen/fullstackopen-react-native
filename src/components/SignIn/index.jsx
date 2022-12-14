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
    .min(1, 'Username must be atleast 1 character long')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be atleast 5 characters long')
    .required('Password is required'),
})

export const SignInContainer = ({ onSubmit }) => {
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

const SignIn = () => {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signIn(username, password)
      navigate('/', { replace: true })
    } catch (e) {
      window.alert(e.message)
    }
  }

  return <SignInContainer onSubmit={onSubmit} />
}

export default SignIn
