/* @flow */
import {
  ACTION_SET_FILTER
} from "../actions";

export default (state = { show: false, search: "" }, action) => {
  const { type, ...args } = action;
  switch (type) {
    case ACTION_SET_FILTER:
      return Object.assign({}, state, args.filter)
    default:
      return state;
  }
}