/* @flow */
import {
  ACTION_LOGIN,
  ACTION_LOGOUT,
} from "../actions";

export default (state = {}, action) => {
  const { type, ...args } = action;
  switch (type) {
    case ACTION_LOGIN:
      return Object.assign({}, state, { user: args.user });
    case ACTION_LOGOUT:
      return Object.assign({}, state, { user: null });
    default:
      return state;
  }
}