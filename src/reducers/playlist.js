/* @flow */
import {
  ACTION_SET_PLAYLIST
} from "../actions";

export default (state = {}, action) => {
  const { type, ...args } = action;
  switch (type) {
    case ACTION_SET_PLAYLIST: 
      return args.playlist
    default:
      return state;
  }
}