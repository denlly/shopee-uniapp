import type { LoginResult } from '@/types/member'
import http from '@/utils/http'
import type { ResultView } from '@/utils/httpDataType'
type LoginInput = {
  code: string
  encryptedData: string
  iv: string
}
/**
 * 小程序登录
 * @param data
 * @returns
 */
export const postLoginWxAPI = (data: LoginInput) => {
  return http<ResultView<LoginResult>>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}

/**
 *暂时使用模拟登陆
 * @param phoneNumber
 * @returns
 */
export const postLoginWxSimpleAPI = (phoneNumber: string) => {
  return http<ResultView<LoginResult>>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
