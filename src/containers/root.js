/* @flow */

import React from "react";
import { Provider } from "react-redux";
import store from "../stores";
import Scene from "../components/scene";

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Scene />
            </Provider>
        );
    }
}

export default Root;