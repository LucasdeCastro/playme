import React from "react";
import Utils from "../utils";
import albums from '../styles/albums';
import { connect } from 'react-redux';
import AlbumsList from './albumsList';
import { View, Text, FlatList, Image, StatusBar } from "react-native";


class Bands extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Albums',
    headerLeft: (
      <Utils.IconButton
        icon={"bars"}
        onPress={e => navigation.navigate('DrawerOpen')} />
    )
  })

  render() {
    return (
      <View style={albums.main}>
        <StatusBar backgroundColor={"#FFF"} barStyle={'dark-content'} />
        <AlbumsList data={this.props.albums} />
      </View>
    )
  }
}

function mapProps({ albums }) {
  return { albums };
}


export default connect(mapProps)(Bands);