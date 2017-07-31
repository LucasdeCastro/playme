import React from "react";
import { connect } from 'react-redux';
import bandsView from '../styles/bandsView';
import { View, Text, Button, FlatList, ScrollView, Image } from "react-native";

import Utils from "../utils";

export default class BandsView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: '',
    headerLeft: (
      <Utils.IconButton
        type={"MDC"}
        size={30}
        icon={"chevron-left"}
        onPress={e => navigation.goBack()} />
    )
  })

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <ScrollView style={bandsView.main}>
        <Image
          source={item.banner}
          style={bandsView.image} />

        <View style={bandsView.textContent}>
          <Text style={bandsView.title}>{item.title}</Text>
          <Text style={bandsView.subtitle}>{item.description}</Text>

          <Text style={bandsView.title}>Albums</Text>

          <View style={bandsView.albumsContent}>
            {item.albums.map((e, k) => (
              <Image
                key={'album' + k}
                source={e.banner}
                style={bandsView.album} />
            ))}
          </View>
        </View>
      </ScrollView>
    )
  }
}
