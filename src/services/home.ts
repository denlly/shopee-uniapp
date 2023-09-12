import http from '@/utils/http'

export const getHomeBannerAPI = async <T>(distributionSet: string) => {
  return http<T>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSet,
    },
  })
}
