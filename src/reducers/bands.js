/* @flow */
import {
  ACTION_SET_BANDS
} from "../actions";

export default (state = [], action) => {
  const { type, ...args } = action;
  switch (type) {
    case ACTION_SET_BANDS: 
      return args.bands
    default:
      return state;
  }
}