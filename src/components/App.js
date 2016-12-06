import React, { Component } from "react"

import { Grid, Row, Col, Panel } from "react-bootstrap"
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
    this._fetchPosts()
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col md={12}>
            <Panel id="news_panel" header="News">
              {
                this.state.posts.map(post => {
                  return <Post key={`post_${post.id}`} {...post} />
                })
              }
              <PostForm addNewPost={this._addNewPost.bind(this)} />
            </Panel>
          </Col>
        </Row>
      </Grid>
    )
  }

  _fetchPosts() {
    fetch(`${process.env.API_HOST}/api/v1/posts.json`).then((response) => {
      return response.json()
    }).then((posts) => {
      this.setState({ posts: posts || [] })
    })
  }

  _addNewPost(newPost) {
    const posts = this.state.posts
    posts.unshift(newPost)
    this.setState({ posts: posts  })
  }
}
