import type { Category } from '@/types/category'
import http from '@/utils/http'

/**
 * 获取分类数据
 */
export const getCategoryTopAPI = async () => {
  return http<Category[]>({
    method: 'GET',
    url: '/category/top',
  })
}
