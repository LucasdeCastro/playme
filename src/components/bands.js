import React from "react";
import Utils from "../utils";
import bands from '../styles/bands';
import { connect } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
  TouchableOpacity
} from "react-native";

export const CardFullImage = ({ item, onPress }) => {
  const albums = item.albums.reduce((xs, x) => xs + x.qtSongs, 0) + " songs " + item.albums.length + " Albums"

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={e => onPress(item)}>
      <View style={bands.card}>
        <Image source={item.banner} style={bands.image}>
          <Text style={bands.title}>{item.title}</Text>
          <Text style={bands.subTitle}>{albums}</Text>
        </Image>
      </View>
    </TouchableOpacity>
  );
};

class Bands extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Bands',
    headerLeft: (
      <Utils.IconButton
        icon={"bars"}
        onPress={e => navigation.navigate('DrawerOpen')} />
    )
  })

  goto = (item) => this.props.navigation.navigate("view", { item: item });
  renderItem = e => <CardFullImage {...e} onPress={this.goto} />

  render() {
    const { bands, filter } = this.props;
    return (
      <View style={bands.main}>
        <StatusBar backgroundColor={"#FFF"} barStyle={'dark-content'} />

        <FlatList
          data={bands}
          keyExtractor={e => e.id}
          renderItem={this.renderItem} />
      </View>
    )
  }
}

function mapProps({ bands }) {
  return { bands };
}

export default connect(mapProps)(Bands);