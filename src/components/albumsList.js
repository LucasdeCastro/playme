import React from "react";
import Utils from "../utils";
import albums from '../styles/albums';
import { View, Text, FlatList, Image } from "react-native";

export const Card = ({ item }) => {
  const time = parseInt(item.time);
  const rest = parseInt((item.time - time) * 100);

  return (
    <View style={albums.card}>
      <Image source={item.banner} style={albums.image} />
      <Text style={albums.title}>{item.title}</Text>
      <Text style={albums.subTitle}>{`${time}:${rest > 9 ? rest : "0" + rest}`}</Text>
    </View>
  );
};

export default ({ data }) => {
  return (
    <FlatList
      style={albums.list}
      data={data}
      keyExtractor={e => e.id}
      renderItem={Card} />
  )
}