const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
  }
}

export default headers
