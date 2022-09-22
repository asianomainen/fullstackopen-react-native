import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import * as yup from 'yup'
import useNewReview from '../../hooks/useNewReview'
import ReviewForm from './ReviewForm'

const initialValues = {
  owner: '',
  name: '',
  rating: '',
  review: '',
}

const validationSchema = yup.object().shape({
  owner: yup.string().required('Repository owner name is required'),
  name: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .typeError('Rating must be a number between 0 and 100')
    .min(0, 'The minimum rating is 0')
    .max(100, 'The maximum rating is 100')
    .required('Rating is required'),
})

export const NewReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const NewReview = () => {
  const [createReview] = useNewReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const { owner, name, rating, review } = values

    try {
      const repoId = await createReview(owner, name, Number(rating), review)
      navigate(`/${repoId.data.createReview.repositoryId}`, { replace: true })
    } catch (e) {
      window.alert(e.message)
    }
  }

  return <NewReviewContainer onSubmit={onSubmit} />
}

export default NewReview
