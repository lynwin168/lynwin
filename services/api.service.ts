import httpClientStrapi from './httpClientStrapi'
import { ArticleData } from '@/models/article.model'

export const getArticles = async (query: string = '', signal?: AbortSignal): Promise<ArticleData> => {
  const { data: response } = await httpClientStrapi.get<ArticleData>(`/api/articles?${query}`, { signal })
  return response
}
