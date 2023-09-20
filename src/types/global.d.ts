/** 通用分页结果类型 */
export type PageResult<T> = {
  items: T[]

  counts: number

  page: number

  pages: number

  pageSize: number
}

type Paging = {
  page?: number
  pageSize?: number
}

type Product = {
  desc: string
  discount: number
  id: string
  name: string
  orderNum: number
  picture: string
  price: number
}
export type { Paging, PageResult, Product }
