import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default class SignIn extends React.Component {
  render() {
    return (
      <Card title="SIGN IN">
        <TextInput
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />

      <Button 
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => onSignIn()}
      />
    </Card>
    );
  }
}