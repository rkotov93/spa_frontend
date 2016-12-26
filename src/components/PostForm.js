import React from "react"
import { findDOMNode } from "react-dom"
import { Row, Col, Button, FormGroup, FormControl } from "react-bootstrap"

const PostForm = ({ title, body, onTitleChange, onBodyChange, onFormSubmit, refreshForm }) => {
  let titleInput
  let bodyInput

  return (
    <Row>
      <Col md={12}>
        <h3>Add your post</h3>

        <form>
          <FormGroup validationState={titleInputValidationState(title.value, title.touched)}>
            <FormControl
              ref={node => titleInput = findDOMNode(node)}
              type="text"
              placeholder="Post title"
              name="post[title]"
              onChange={() => onTitleChange(titleInput.value)}
              data-name="title"
            />
          </FormGroup>
          <FormGroup validationState={bodyInputValidationState(body.value, body.touched)}>
            <FormControl
              ref={node => bodyInput = findDOMNode(node)}
              componentClass="textarea"
              placeholder="Content"
              name="post[body]"
              onChange={() => onBodyChange(bodyInput.value)}
              data-name="body"
            />
          </FormGroup>
          <Button
            bsStyle="primary"
            style={{ width: "100%" }}
            onClick={() => {
              onFormSubmit({ title: title.value, body: body.value })
              titleInput.value = ""
              bodyInput.value = ""
              refreshForm()
            }}
            disabled={!(isTitleValid(title.value) && isBodyValid(body.value))}
          >
            Create
          </Button>
        </form>
      </Col>
    </Row>
  )
}

const isTitleValid = (value) => {
  return value.length > 0 && value.length <= 120
}

const isBodyValid = (value) => {
  return value.length > 0
}

const titleInputValidationState = (value, touched) => {
  if (isTitleValid(value)) return "success"
  else if (touched) return "error"
}

const bodyInputValidationState = (value, touched) => {
  if (isBodyValid(value)) return "success"
  else if (touched) return "error"
}

export default PostForm
