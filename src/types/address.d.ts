type AddressParams = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  /** 默认地址，1为是，0为否 */
  isDefault: number
}

/** 收货地址项 */
export type AddressItem = AddressParams & {
  id: string
  fullLocation: string
}
export type { AddressParams, AddressItem }
