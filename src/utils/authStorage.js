import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getAccessToken() {
    console.log('Getting access token')
    const accessToken = await AsyncStorage.getItem(
      `${this.namespace}:accessToken`
    )

    return accessToken ? accessToken : null
  }

  async setAccessToken(accessToken) {
    console.log('Setting access token as:', accessToken)
    await AsyncStorage.setItem(
      `${this.namespace}:accessToken`,
      JSON.stringify(accessToken)
    )
  }

  async removeAccessToken() {
    console.log('Removing access token')
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`)
  }
}

export default AuthStorage
