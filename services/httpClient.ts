import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LOCAL_API_URL
})

export default httpClient
