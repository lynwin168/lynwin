import axios from 'axios'

const httpClientLynwin = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LYNWIN_API_URL
})

httpClientLynwin.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers['api-key'] = String(process.env.NEXT_PUBLIC_LYNWIN_API_KEY)
  }
  return config
})

export default httpClientLynwin
