import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from './store/configureStore'

import App from './components/App'
import LoginPage from './containers/LoginPage'
import PostsList from './containers/PostsList'
import PostPage from './containers/PostPage'
import NoMatch from './components/NoMatch'

import { appInitialize } from './actions/AppActions'
import { loginPageEnter } from './actions/AuthenticationActions'
import { postsListEnter } from './actions/PostActions'
import { postPageEnter } from './actions/PostActions'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App} onEnter={appInitialize(store.dispatch)}>
        <Route path='/' components={{ main: PostsList }} onEnter={postsListEnter(store.dispatch)} />
        <Route
          path='login' components={{ main: LoginPage }}
          onEnter={loginPageEnter()} />
        <Route path='posts/:id' components={{ main: PostPage }} onEnter={postPageEnter(store.dispatch)} />
      </Route>
      <Route path='*' component={NoMatch}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
