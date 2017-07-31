import React from 'react';
import { ScrollView, View } from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from "react-navigation";
import Login from "./components/login";
import Bands from "./components/bands";
import BandsView from "./components/bandsView";
import PlayAlbum from "./components/playAlbum";
import Albums from "./components/albums";
import TopAlbums from "./components/topAlbums";
import PlayLists from "./components/playlists";
import Drawer from "./components/drawer";
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

const makeItem = (comp, children = {}) => StackNavigator(
  Object.assign({ InnerHome: { screen: comp }, }, children),
  {
    transitionConfig: () => {
      return { screenInterpolator: CardStackStyleInterpolator.forHorizontal };
    }
  });

const routes = {
  "Login": { screen: Login },
  "Top Albums": { screen: makeItem(TopAlbums, { view: { screen: PlayAlbum } }) },
  "Bands": { screen: makeItem(Bands, { view: { screen: BandsView } }) },
  "Albums": { screen: makeItem(Albums) },
  "Playlists": { screen: makeItem(PlayLists) },
}

export const LoginStack = StackNavigator(routes, { initialRouteName: "Login" })
export const MainStack = DrawerNavigator(routes, {
  initialRouteName: "Top Albums",
  headerMode: 'screen',
  drawerWidth: 270,
  contentComponent: (props) => <Drawer {...props} />,
})