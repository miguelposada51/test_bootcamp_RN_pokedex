import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,AsyncStorage, Text
} from 'react-native';

export default class SignUp extends React.Component {
  state = {
     password: '', email: ''
  }

  static navigationOptions = {
    title: 'SignUp Section',
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  // register user and storage session
  signUp = async () => {
    const { password, email } = this.state
    try {
      // here place your signup logic
      let loginDetails={
        email: email,
        password: password
      }
      if(email !== "" && password !== ""){
        await AsyncStorage.setItem('loginDetails', JSON.stringify(loginDetails));
        const { navigation } = this.props;
        navigation.navigate('Home');      
      }else{
        Alert.alert('Credential err: Email and Password is Required')
        console.log('error SigninUP!: ' + email)
      }
    } catch (err) {
      console.log('error signing up: ', err)
      Alert.alert('Credential err. Email and Password is Required');
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to review Pokemon Api SignUp Section. </Text>
        <Text>Input Email And Password. </Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})