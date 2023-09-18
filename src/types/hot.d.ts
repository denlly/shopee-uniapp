import { Product, type PageResult } from '@/types/global'
type HotResult = {
  title: String
  id: String
  bannerPicture: String
  subTypes: HotSubType[]
}

type HotSubType = {
  id: String
  title: String
  goodsItems: HotGoodItem[]
}

type HotGoodItem = PageResult<Product>

export type { HotResult, HotSubType, HotGoodItem }
