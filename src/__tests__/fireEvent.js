import { fireEvent, render } from '@testing-library/react-native'
import { useState } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    onSubmit({ username, password })
  }

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  )
}

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', () => {
    const onSubmit = jest.fn()
    const { getByPlaceholderText, getByText } = render(
      <Form onSubmit={onSubmit} />
    )

    fireEvent.changeText(getByPlaceholderText('Username'), 'kalle')
    fireEvent.changeText(getByPlaceholderText('Password'), 'password')
    fireEvent.press(getByText('Submit'))

    expect(onSubmit).toHaveBeenCalledTimes(1)

    // onSubmit.mock.calls[0][0] contains the first argument of the first call
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password',
    })
  })
})
