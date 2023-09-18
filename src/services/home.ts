import http from '@/utils/http'
import type { Category, Guess, Hot, Banner } from '@/types/home'
import type { PageResult, Paging } from '@/types/global'
/**
 * 获取首页Banner
 * @param distributionSet
 * @returns
 */
export const getHomeBannerAPI = async (distributionSet: string) => {
  return http<PageResult<Banner>>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSet,
    },
  })
}

/**
 * 获取首页分类
 */
export const getHomeCategoryAPI = async () => {
  return http<PageResult<Category>>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

/**
 * 获取热门API
 * @returns
 */
export const getHomeHotAPI = async () => {
  return http<PageResult<Hot>>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

export const getHomeGuessAPI = async (data: Paging) => {
  return http<PageResult<Guess>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
