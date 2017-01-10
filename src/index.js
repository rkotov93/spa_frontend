import React from "react"
import { render } from "react-dom"

import { Provider } from "react-redux"
import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"
import configureStore from "./store/configureStore"

import App from "./components/App"
import PostsList from "./containers/PostsList"
import PostPage from "./containers/PostPage"
import { postsListEnter } from "./actions/PostActions"
import { postPageEnter } from "./actions/PostActions"

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" components={{ main: PostsList }} onEnter={postsListEnter(store.dispatch)} />
        <Route path="posts/:id" components={{ main: PostPage }} onEnter={postPageEnter(store.dispatch)} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
)
