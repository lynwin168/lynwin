import axios from 'axios'

const httpClientLynwin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LYNWIN_API_URL,
  headers: {
    'api-key': String(process.env.NEXT_PUBLIC_LYNWIN_API_KEY)
  }
})

export default httpClientLynwin