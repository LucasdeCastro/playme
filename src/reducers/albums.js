/* @flow */
import {
  ACTION_SET_ALBUMS
} from "../actions";

export default (state = [], action) => {
  const { type, ...args } = action;
  switch (type) {
    case ACTION_SET_ALBUMS: 
      return args.albums
    default:
      return state;
  }
}