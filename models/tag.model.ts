import { StrapiDataItem, StrapiMetaData } from './strapi.model'

export interface TagData {
  data: [StrapiDataItem<TagAttributesData>]
  meta: StrapiMetaData
}

export interface TagAttributesData {
  name: string
  publishedAt: string
  createdAt?: string
  updatedAt?: string
}
