import React from "react"

import { Grid, Row, Col, Panel } from "react-bootstrap"
import "../stylesheets/application.scss"

import PostsList from "../containers/PostsList"
import PostForm from "../containers/PostForm"

const App = () => {
  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Panel id="news_panel" header="News">
            <PostsList />
            <PostForm />
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

export default App
