import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import App from "./components/App"
import configureStore from "./store/configureStore"
import { fetchPosts } from "./actions/PostActions"

const store = configureStore()
store.dispatch(fetchPosts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
