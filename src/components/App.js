import React, { Component } from "react"

import { Panel } from "react-bootstrap"
import "../stylesheets/application.scss"

import Post from "./Post"
import PostForm from "./PostForm"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch("http://localhost:3000/api/v1/posts.json").then((response) => {
      return response.json()
    }).then((posts) => {
      this.setState({ posts: posts || [] })
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <Panel id="news_panel" header="News">
          {
            this.state.posts.map(post => {
              return <Post key={`post_${post.id}`} {...post} />
            })
          }
          <PostForm />
        </Panel>
      </div>
    )
  }
}
