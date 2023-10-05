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

export const getMemberCartAPI = () => {
  return http<ResultView<CartItem>>({
    method: 'GET',
    url: '/member/cart',
  })
}

//
export const deleteMemberCartAPI = (ids: string[]) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data: { ids },
  })
}

export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}
export const putMemberCartSelectedAPI = (selected: boolean) => {
  return http({
    method: 'PUT',
    url: `/member/cart/selected`,
    data: { selected },
  })
}
