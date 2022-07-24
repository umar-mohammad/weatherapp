import React from "react"
import ReactDOM from "react-dom"
import Dashboard from "./components/Dashboard"
import { Provider } from "react-redux"
import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"
import "./index.css"

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById("root")
)
