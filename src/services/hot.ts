import type { Paging } from '@/types/global'
import http from '@/utils/http'
import type { HotResult } from '@/types/hot'

type HotParams = Paging & { subType?: string }
/**
 * 获取热门推荐
 * @param url
 * @param data
 * @returns
 */
export const getHotRecommendAPI = async (url: string, data?: HotParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
