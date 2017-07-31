import React from "react";
import Utils from "../utils";
import { connect } from 'react-redux';
import { View, Text, Image, FlatList } from "react-native";
import AlbumsList from './albumsList';
import playlist from '../styles/playList';

class PlayList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Playlists',
    headerLeft: (
      <Utils.IconButton
        icon={"bars"}
        onPress={e => navigation.navigate('DrawerOpen')} />
    )
  })

  getTime(albums) {
    const sum = albums.reduce((xs, x) => xs + x.time, 0);
    const hours = parseInt(sum / 60);
    const minutes = parseInt(sum % 60);

    return (hours > 0 ? hours + "h " : "") + (minutes + "m");
  }

  render() {
    const { playlist: store } = this.props;
    return (
      <View style={playlist.main}>
        <Image source={store.banner} style={playlist.image}>

          <Text style={playlist.title}>{store.title}</Text>
          <Text style={playlist.subtitle}>
            PlayList duration {this.getTime(store.albums)}
          </Text>

        </Image>

        <AlbumsList data={store.albums} />
      </View>
    )
  }
}

function mapProps({ playlist }) {
  return { playlist };
}

export default connect(mapProps)(PlayList);