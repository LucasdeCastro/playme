/* @flow */
/*eslint-disable prefer-const */
import React from "react";
import { View } from "react-native";
import { connect } from 'react-redux';

import { LoginStack, MainStack } from "../routes";
import {
  onLogin,
  onLogout,
  getBands,
  getAlbums,
  onSaveUser,
  getPlayList,
  getTopAlbums,
} from "../actions";
import Login from "./login";

class Scene extends React.Component {
  onLogin = (user) => {
    const { usuarios } = this.props;
    const hasUser = usuarios.find(e => (
      e.userName == user.userName && e.password == user.password
    ))

    console.log(user, usuarios, hasUser);
    if (hasUser) {
      this.props.onLogin(user);
      this.props.getTopAlbums();
      this.props.getBands();
      this.props.getAlbums();
      this.props.getPlayList();
    }
  }

  render() {
    const authenticated = this.props.user;
    if (authenticated)
      return <MainStack />
    else
      return <Login onLogin={this.onLogin} onSaveUser={this.props.onSaveUser} />
  }
}


function mapPros(props) {
  return { user: props.session.user, usuarios: props.usuarios }
}

function mapDispatch(dispatch) {
  return {
    getBands: _ => dispatch(getBands()),
    getAlbums: _ => dispatch(getAlbums()),
    onSaveUser: user => dispatch(onSaveUser(user)),
    onLogin: user => dispatch(onLogin(user)),
    getPlayList: _ => dispatch(getPlayList()),
    getTopAlbums: _ => dispatch(getTopAlbums()),
  }
}

export default connect(mapPros, mapDispatch)(Scene);