import axios from 'axios'

const httpClientStrapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL
})

export default httpClientStrapi
