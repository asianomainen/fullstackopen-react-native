import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useSignIn from '../../hooks/useSignIn'
import useSignUp from '../../hooks/useSignUp'
import SignUpForm from './SignUpForm'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'The minimum username length is 1 character')
    .max(30, 'The maximum username length is 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'The minimum password length is 5 characters')
    .max(50, 'The maximum password length is 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required'),
})

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const SignUp = () => {
  const [signIn] = useSignIn()
  const [signUp] = useSignUp()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { username, password } = values

    try {
      await signUp(username, password)
      await signIn(username, password)
      navigate('/', { replace: true })
    } catch (e) {
      console.log(e)
    }
  }

  return <SignUpContainer onSubmit={onSubmit} />
}

export default SignUp
