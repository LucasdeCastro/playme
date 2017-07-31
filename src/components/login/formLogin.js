/* @flow */

import React from "react";
import { View } from "react-native";

import Utils from "../../utils";
import login from "../../styles/login";

export default class FormLogin extends React.Component {
  state = { userName: "", password: "", remember: false }

  onChangeUserName = userName => this.setState({ userName })
  onChangePassword = password => this.setState({ password })
  onChangeRemember = _ => this.setState({ remember: !this.state.remember })

  login = () => {
    const { userName, password } = this.state;
    if(userName !== "" && password !== ""){
      this.props.onLogin(this.state);
    }
  }

  render() {
    const { remember } = this.state;
    return (
      <View style={login.mainLoginForm}>
        <Utils.InputIconIO
          size={30}
          onChangeText={this.onChangeUserName}
          placeholder={"USERNAME"}
          icon={"ios-person-outline"} />

        <Utils.InputIconIO
          size={30}
          onChangeText={this.onChangePassword}
          placeholder={"PASSWORD"}
          icon={"ios-key-outline"} />

        <Utils.FullButton
          color={"#FFF"}
          onPress={this.login}
          background={"#000"}
          title={'Login'} />

        <Utils.CheckBox
          value={remember == true}
          onPress={this.onChangeRemember}
          label={"Remember Password"} />
      </View>
    )
  }
}