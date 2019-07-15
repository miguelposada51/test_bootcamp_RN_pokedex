import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert, AsyncStorage } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import  Home  from "./app/screens/Home";
import  SignUp  from "./app/screens/SignUp";
import  PokeCard  from "./app/components/PokeCard";
import  Pokemon  from "./app/components/Pokemon";



class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
    };
  } 

  // Options to Login or Signup
  static navigationOptions = {
    title: 'Please sign in or SignUp',
  };

   // validate if session exist
  _signInAsync = async () => {
    const { email, password } = this.state;
    //save data with asyncstorage
    try {
     if(email !== "" && password !== ""){
      let loginDetails = await AsyncStorage.getItem('loginDetails');
          let ld = JSON.parse(loginDetails); 
          if (ld.email != null && ld.password != null)
          {
              if (ld.email == email && ld.password == password)
              {
                this.props.navigation.navigate('Home');  
              }
              else
              {
                  alert('Email and Password does not exist!');
              }
          }
      }else{
        Alert.alert('Credential err: Email And Pass is required')
          console.log('error SigninUP!: ' + email)
      }
    } catch (err) {
      console.log('error signing up: ', err)
      Alert.alert('Credential err. Email and Password is Required');
    }

  };
  

  render() {

    return (
      <View style={styles.container} title="SIGN IN">
      <TextInput
        value={this.state.email}
        onChangeText={(email) => this.setState({ email })}
        placeholder={'Email'}
        style={styles.input}
      />
      <TextInput
        value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        secureTextEntry={true}
        style={styles.input}
      />

    <Button 
      buttonStyle={{ marginTop: 20 }}
      backgroundColor="#03A9F4"
      title="SIGN IN"
      onPress={() => this._signInAsync()}
    />
    <Text>If you are not register please click on button to SignUp</Text>
    <Button 
      buttonStyle={{ marginTop: 20 }}
      backgroundColor="#03A9F4"
      title="SIGN UP"
      onPress={() => this.props.navigation.navigate('SignUp')}
    />

  </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
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
});

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  Home: {
    screen: Home
  },
  PokeCard: { 
    screen: PokeCard 
  },
  Pokemon: {
    screen: Pokemon 
  },

    initialRouteName: 'SignIn'
});



export default createAppContainer(AppNavigator);