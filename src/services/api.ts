import axios from 'axios'

// const PORT = process.env.PORT || 80

const api = axios.create({
  baseURL: 'http://localhost:4005',
})
export default api
