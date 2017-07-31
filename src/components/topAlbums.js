import React from "react";
import { connect } from 'react-redux';
import {
  View,
  Text,
  Button,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Image
} from "react-native";

import Utils from "../utils";
import topAlbums from '../styles/topAlbums';
import LinearGradient from 'react-native-linear-gradient';

export const CardTopAlbums = ({ item, goto }) => (
  <TouchableOpacity onPress={e => goto(item)}>
    <View style={topAlbums.card}>
      <Image
        source={item.banner}
        resizeMode={'stretch'}
        style={topAlbums.imageCard} />

      <View style={topAlbums.cardBottom}>
        <Text style={topAlbums.cardTitle}>{item.title}</Text>
        <Text style={topAlbums.cardSubTitle}>{item.artist}</Text>
      </View>
    </View>
  </TouchableOpacity>
)

class TopAlbums extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Top Albums',
    headerLeft: (
      <Utils.IconButton
        icon={"bars"}
        onPress={e => navigation.navigate('DrawerOpen')} />
    )
  })

  goto = e => this.props.navigation.navigate("view", { item: e });
  renderItem = e => <CardTopAlbums goto={this.goto} {...e} />

  render() {
    return (
      <LinearGradient
        colors={["#E4E4E4", "#FFF"]}
        style={topAlbums.main}>
        <StatusBar backgroundColor={"#FFF"} barStyle={'dark-content'} />
        <FlatList
          numColumns={2}
          orizontal={false}
          keyExtractor={e => e.id}
          renderItem={this.renderItem}
          data={this.props.albums} />
      </LinearGradient>
    )
  }
}

function mapProps({ topAlbums }) {
  return { albums: topAlbums };
}

export default connect(mapProps)(TopAlbums);