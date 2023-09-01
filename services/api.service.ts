import httpClientStrapi from './httpClientStrapi'
import httpClient from './httpClient'
import { ArticleData } from '@/models/article.model'
import { Signup, SignupRequest } from '@/models/signup.model'
import { SigninRequest } from '@/models/signin.model'
import { StrapiDataItem, StrapiMetaPaginationData } from '@/models/strapi.model'
import { AnnouncementAttributesData } from '@/models/announcement.model'

export const getArticles = async (query: string = '', signal?: AbortSignal): Promise<ArticleData> => {
  const { data: response } = await httpClientStrapi.get<ArticleData>(`/api/articles?${query}`, { signal })
  return response
}

export const signup = async (body: SignupRequest): Promise<Signup> => {
  const { data: response } = await httpClient.post<Signup>('/auth/signup', body)
  return response
}

export const signin = (body: SigninRequest) => {
  const { username, password, return_url } = body
  const url = `${process.env.NEXT_PUBLIC_LYNWIN_API_URL}/redirect-login?username=${username}&password=${password}&return_url=${return_url}`
  window.location.replace(url)
}

export const getAnnouncement = async (): Promise<StrapiDataItem<AnnouncementAttributesData>> => {
  const response = await httpClientStrapi.get(`/api/announcement`)
  return response.data.data
}
