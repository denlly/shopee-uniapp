import http from '@/utils/http'

/**
 * 获取首页Banner
 * @param distributionSet
 * @returns
 */
export const getHomeBannerAPI = async (distributionSet: string) => {
  return http({
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
  return http({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
