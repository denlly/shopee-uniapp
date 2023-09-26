import http from '@/utils/http'

export const getGoodByIdAPI = (id: string) => {
  return http({
    url: '/goods',
    method: 'GET',
    data: { id },
  })
}
