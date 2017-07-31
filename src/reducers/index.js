/* @flow */

import { combineReducers } from "redux";
import session from "./session";
import topAlbums from "./topAlbums";
import usuarios from "./usuarios";
import filter from "./filter";
import bands from "./bands";
import albums from "./albums";
import playlist from "./playlist";

const reducers = combineReducers({
  usuarios,
  session,
  topAlbums,
  albums,
  playlist,
  bands,
  filter,
});
export default reducers;
