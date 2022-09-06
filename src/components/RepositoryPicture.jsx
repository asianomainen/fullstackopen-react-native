import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const RepositoryPicture = ({ uri }) => {
  const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 5,
      marginRight: 15,
    },
  })

  return (
    <View>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: uri,
        }}
      />
    </View>
  )
}

export default RepositoryPicture
