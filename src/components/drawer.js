import React from "react";
import { View, Image, FlatList, Text, TouchableOpacity } from "react-native";
import { DrawerItems } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import Colors from "../utils/colors";
import drawer from "../styles/drawer";

const { pinkLight, pinkDark } = Colors;

const DrawerItem = ({ goto, item }) => {
  if (item.key == "Login")
    return null;
  return (
    <TouchableOpacity
      onPress={e => goto(item.key)}>
      <View style={drawer.card}>
        <Text style={drawer.cardtext}>{item.routeName}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default class Drawer extends React.Component {

  goto = r => {
    this.props.navigation.navigate(r);
  }

  render() {
    return (
      <LinearGradient
        style={drawer.main}
        colors={["#FF1A43", "#FF0B7B"]}>
        
        <Image
          source={require("../images/logomenu.png")}
          style={drawer.logo} />

        <FlatList
          style={drawer.list}
          keyExtractor={e => e.key || e.index}
          data={this.props.items}
          renderItem={e => <DrawerItem goto={this.goto} {...e} />} />
      </LinearGradient>
    );
  }
}