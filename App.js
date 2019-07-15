import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import  Home  from "./app/screens/Home";
import  PokeCard  from "./app/components/PokeCard";
import  Pokemon  from "./app/components/Pokemon";



class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  } 

  onSignIn() {
    const { username, password } = this.state;

    if(username == "admin" && password == "admin"){
      this.props.navigation.navigate('Home')
    }else{
      Alert.alert('Credential err', `${username} + ${password}` +'use : admin - admin');
    }

  }
  

  render() {

    return (
      <View style={styles.container} title="SIGN IN">
      <TextInput
        value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
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
      onPress={() => this.onSignIn()}
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
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

const AppNavigator = createStackNavigator({
  SignIn: {
    screen: SignIn
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