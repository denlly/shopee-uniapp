import type { Product } from './global'

type Category = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: CategoryChildren[]
}
type CategoryChildren = {
  id: string
  name: string
  picture: string
  parentId?: string
  parentName?: string
  categories?: string
  brands?: string
  saleProperties: string
  goods: Product[]
}
export type { Category, CategoryChildren }
