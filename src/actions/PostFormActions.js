export const handleTitleInputChange = (value) => {
  return {
    type: "POST_FORM_TITLE_UPDATE",
    title: {
      touched: true,
      value
    }
  }
}

export const handleBodyInputChange = (value) => {
  return {
    type: "POST_FORM_BODY_UPDATE",
    body: {
      touched: true,
      value
    }
  }
}

export const refreshForm = () => {
  return {
    type: "POST_FORM_REFRESH"
  }
}
