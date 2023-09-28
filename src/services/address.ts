import type { AddressParams, AddressItem } from '@/types/address'
import http from '@/utils/http'
/**
 * 添加地址
 * @param data
 * @returns
 */
export const postMemberAddressAPI = (data: AddressParams) => {
  ///member/address
  return http({
    method: 'POST',
    url: '/member/address',
  })
}

/**
 * 修改地址
 * @param id
 * @param data
 * @returns
 */
export const putMemberAddressByIdAPI = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

/**
 * 获取地址列表
 */
export const getMemberAddressAPI = () => {
  return http<Array<AddressItem>>({
    method: 'GET',
    url: '/member/address',
  })
}

/**
 * 获取收货地址详情
 */
export const getMemberAddressByIdAPI = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}
