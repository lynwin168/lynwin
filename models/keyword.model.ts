import { StrapiDataItem, StrapiMetaData } from './strapi.model'

export interface KeywordData {
  data: [StrapiDataItem<KeywordAttributesData>]
  meta: StrapiMetaData
}

export interface KeywordAttributesData {
  name: string
  publishedAt: string
  createdAt?: string
  updatedAt?: string
}
