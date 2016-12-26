const posts = (state = [], action) => {
  switch (action.type) {
  case "ADD_POST":
    console.log("Hello, Redux!")
    return state
  default:
    return state
  }
}

export default posts
