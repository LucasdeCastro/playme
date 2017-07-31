/* @flow */

import React from "react";
import { View } from "react-native";

import Utils from "../utils";
import login from "../styles/login";

export default class FormLogin extends React.Component {
  state = { userName: "", password: "", confirm: "" }

  onChangeUserName = userName => this.setState({ userName })
  onChangePassword = password => this.setState({ password })
  onChangeConfirm = confirm => this.setState({ confirm })
  onChangeRemember = _ => this.setState({ remember: !this.state.remember })

  save = () => {
    const { userName, password, confirm } = this.state;
    if (userName !== "" && password !== "" && password == confirm) {
      this.props.onSaveUser({ userName, password });
      this.setState({ userName: "", password: "", confirm: "" })
    }
  }

  render() {
    const { remember } = this.state;
    return (
      <View style={login.mainLoginForm}>
        <Utils.InputIconIO
          size={30}
          onChangeText={this.onChangeUserName}
          placeholder={"Username"}
          icon={"ios-person-outline"} />

        <Utils.InputIconIO
          size={30}
          onChangeText={this.onChangePassword}
          placeholder={"Password"}
          icon={"ios-key-outline"} />

        <Utils.InputIconIO
          size={30}
          onChangeText={this.onChangeConfirm}
          placeholder={"Confirm Password"}
          icon={"ios-key-outline"} />

        <Utils.FullButton
          color={"#FFF"}
          onPress={this.save}
          background={"#000"}
          title={'Save'} />

      </View>
    )
  }
}