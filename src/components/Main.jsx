import { StyleSheet, View } from 'react-native'
import { Navigate, Route, Routes } from 'react-router-native'

import theme from '../theme'
import AppBar from './AppBar'
import NewReview from './NewReview'
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import SignUp from './SignUp'
import SingleRepository from './SingleRepository'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/signout" element={<RepositoryList />} exact />
        <Route path="/:repoId" element={<SingleRepository />} exact />
        <Route path="/review" element={<NewReview />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  )
}

export default Main
