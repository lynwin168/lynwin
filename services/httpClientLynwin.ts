import axios from 'axios'

const httpClientLynwin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LYNWIN_API_URL,
  headers: {
    'api-key': String(process.env.LYNWIN_API_KEY) // has api key on ssr only.
  }
})

export default httpClientLynwin
