/* @flow */

import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

const logger = createLogger();

export default createStore(reducers, applyMiddleware(logger));