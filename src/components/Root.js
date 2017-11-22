import React, { Component } from 'react'
import { Provider } from "react-redux"
import { rootStore } from "../store"
import App from './App'

class Root extends Component {
    render() {
        return <Provider store={rootStore}>
            <App />
        </Provider>
    }
}

export default Root;
