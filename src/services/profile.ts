import http from '@/utils/http'
import type { ProfileDetail, ProfileParams } from '@/types/member'

// 个人信息
export const getMemberProfileAPI = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

// 修改自己的个人信息
export const modifyMemberProfileleAPI = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
