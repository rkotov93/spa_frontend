import React from 'react'

import { Grid, Row, Col, Panel } from 'react-bootstrap'
import '../stylesheets/application.scss'

import Header from '../containers/Header'

const App = ({ main }) => {
  return (
    <Grid fluid={true}>
      <Row>
        <Col md={12}>
          <Panel id='news_panel' header={<Header />}>
            {main}
          </Panel>
        </Col>
      </Row>
    </Grid>
  )
}

export default App
