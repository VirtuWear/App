import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

import { View } from '../components/Themed';

export default function TabOneScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      onChangeText={text => setUsername(text)}
      placeholder={'username'}
      value={username}
      autoCompleteType={'username'}
    />
    <TextInput
      style={styles.input}
      onChangeText={text => setPassword(text)}
      placeholder={'password'}
      value={password}
      autoCompleteType={'password'}
      secureTextEntry={true}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={() => {}}
      accessibilityLabel={"Login Button"}
    >
      <Text>Login</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
  button: {
    height: 25,
    width: 100,
    backgroundColor:'#e8e8e8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingLeft: 10,
  }
});
