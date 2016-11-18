import React, { Component } from "react"
import Post from "./Post"
import PostForm from "./PostForm"

export default class App extends Component {
  render() {
    const news = [
      { id: 1, name: "News1", description: "Description of News1" },
      { id: 2, name: "News2", description: "Description of News2" },
      { id: 3, name: "News3", description: "Description of News3" }
    ]
    return (
      <div>
        {
          news.map(post => {
            return <Post key={`post_${post.id}`} {...post} />
          })
        }
        <PostForm />
      </div>
    )
  }
}
