import { Formik } from 'formik'
import LoginForm from './LoginForm'

const initialValues = {
  username: '',
  password: '',
}

const SignIn = () => {
  const onSubmit = (values) => {
    const username = values.username
    const password = values.password

    if (username && password) {
      console.log('LOGGING IN')
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignIn
