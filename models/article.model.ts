import { StrapiDataItem, StrapiMediaItemData, StrapiMetaData } from './strapi.model'
import { TagAttributesData } from './tag.model'

export interface ArticleData {
  data: [StrapiDataItem<ArticleAttributesData>]
  meta: StrapiMetaData
}

export interface ArticleAttributesData {
  slug: string
  title: string
  description: string
  image: {
    data: StrapiDataItem<StrapiMediaItemData>
  }
  tags?: { data: [StrapiDataItem<TagAttributesData>] }
  content?: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  relatedArticles: { data: [StrapiDataItem<ArticleAttributesData>] }
}
