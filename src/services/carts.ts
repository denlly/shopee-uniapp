import http from '@/utils/http'

/**
 *加入购物车的接口
 * @param data
 * @returns
 */
export const postMemberCartAPI = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}
