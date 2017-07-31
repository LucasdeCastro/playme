/* @flow */

import React from "react";
import {
  View,
  StatusBar,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import LinearGradient from 'react-native-linear-gradient';

import FormLogin from "./formLogin";
import FormUser from "../formUser";
import login from "../../styles/login";
import Colors from "../../utils/colors";

const { pinkLight, pinkDark } = Colors;


export default class Login extends React.Component {
  state = { isLoginForm: true, loading: true, }

  changeForm = e => this.setState({ isLoginForm: !this.state.isLoginForm })

  renderForm = e => {
    const { loading, isLoginForm } = this.state;

    if (loading) {
      setTimeout(() => {
        this.setState({ loading: false })
      }, 2000);

      return <ActivityIndicator
        color={"#FFF"}
        style={{ marginTop: 20 }}
        size={80} />
    }

    if (isLoginForm)
      return <FormLogin onLogin={this.props.onLogin} />
    else
      return <FormUser onSaveUser={this.onSaveUser} />
  }


  onSaveUser = e => {
    this.setState({ isLoginForm: true });
    this.props.onSaveUser(e);
  }

  render() {
    const { loading, isLoginForm } = this.state;
    return (
      <LinearGradient
        style={login.main}
        colors={[pinkLight, pinkDark]} >

        <StatusBar backgroundColor={pinkLight} />

        <View style={login.formCenter}>
          <Image
            source={require("../../images/logo.png")}
            style={login.logo} />

          {this.renderForm()}
        </View>

        {!loading && (
          <TouchableOpacity
            onPress={this.changeForm}
            style={login.singUp}>
            <Text style={login.button}>
              {isLoginForm ? "Sing Up" : "Cancel"}
            </Text>
          </TouchableOpacity>
        )}
      </LinearGradient>
    );
  }
}
