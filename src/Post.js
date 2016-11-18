import React, {Component} from "react"

export default class Post extends Component {
  render() {
    return (
      <div id={this.props.id}>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
      </div>
    )
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
}
