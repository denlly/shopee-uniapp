/**
 * 设置拦截器
 *     拦截request请求
 *     拦截uploadFile请求
 * https://uniapp.dcloud.net.cn/api/interceptor.html
 */
import { useMemberStore } from '@/stores'
import type { ResultView } from '@/utils/HttpDataType'

const baseUrl = 'https://101.37.44.31'

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    options.timeout = 8000
    // 增加token 和 客户端声明
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    // console.log(memberStore.profile, 'memberStore.profile')
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
      Host: 'pcapi-xiaotuxian-front-devtest.itheima.net',
      Referer: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
      Authorization: token ? token : undefined,
    }
    // console.log(process.env.SHOPEE_BASE_API)
    // console.log(options, 'options')
  },
  success(args: any) {
    // 请求成功后，修改code值为1
    // args.data.code = 1
    // console.log('Interceptor success!')
  },
  fail(err: any) {
    // console.log('interceptor-fail', err)
  },
  complete(res: any) {
    // console.log('interceptor-complete', res)
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<ResultView<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(res) {
        // console.log(res.statusCode, 'res.statusCode')
        if (res.statusCode >= 200 && res.statusCode < 300) {
          //1. 调用成功
          resolve(res.data as ResultView<T>)
        } else if (res.statusCode === 401) {
          //2. 鉴权失败
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          //3. 其他错误 -> 根据后端错误信息提示
          uni.showToast({
            title: (res.data as ResultView<T>).msg || '哎呦，一不小心用力过猛',
            icon: 'fail',
            mask: true,
          })
          reject(res)
        }
        // console.log('Promise success')
      },
      fail(err) {
        uni.showToast({
          title: '网络就像男票，不行咱就换一个',
          icon: 'fail',
          mask: true,
        })
        reject(err)
      },
    })
  })
}
export default http
