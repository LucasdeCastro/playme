/* @flow */
import {
  ACTION_SAVE_USER
} from "../actions";

export default (state = [], action) => {
  console.log(action);
  
  const { type, ...args } = action;
  switch (type) {
    case ACTION_SAVE_USER:
      return state.concat(args.user);
    default:
      return state;
  }
}