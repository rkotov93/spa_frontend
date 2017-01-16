import React from 'react'
import { Row, Col, Button, FormGroup, FormControl } from 'react-bootstrap'

const PostForm = ({ title, body, isFetching, message, onTitleChange, onBodyChange, onFormSubmit }) => {
  let titleInput
  let bodyInput

  return (
    <Row>
      <Col md={12}>
        <h3>Add your post</h3>

        <form>
          {errorMessages(message)}
          <FormGroup validationState={titleInputValidationState(title.value, title.touched)}>
            <FormControl
              inputRef={node => titleInput = node}
              type='text'
              placeholder='Post title'
              name='post[title]'
              onChange={() => onTitleChange(titleInput.value)}
              data-name='title'
              value={title.value}
              disabled={isFetching}
            />
          </FormGroup>
          <FormGroup validationState={bodyInputValidationState(body.value, body.touched)}>
            <FormControl
              inputRef={node => bodyInput = node}
              componentClass='textarea'
              placeholder='Content'
              name='post[body]'
              onChange={() => onBodyChange(bodyInput.value)}
              data-name='body'
              value={body.value}
              disabled={isFetching}
            />
          </FormGroup>
          <Button
            bsStyle='primary'
            style={{ width: '100%' }}
            onClick={() => {
              onFormSubmit({ title: title.value, body: body.value })
            }}
            disabled={!(isTitleValid(title.value) && isBodyValid(body.value)) || isFetching}
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
  if (isTitleValid(value)) return 'success'
  else if (touched) return 'error'
}

const bodyInputValidationState = (value, touched) => {
  if (isBodyValid(value)) return 'success'
  else if (touched) return 'error'
}

const errorMessages = (message) => {
  if (message)
    return (
      <div>
        {
          Object.keys(message).map(field => {
            return (<p key={field} style={{ color: 'red' }}>{field} {message[field]}</p>)
          })
        }
      </div>
    )
}

export default PostForm
