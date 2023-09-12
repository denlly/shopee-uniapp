## 项目简介

虾皮购物（shopee）项目包含从首页浏览商品，商品详情，微信登录，加入购物车，提交订单，微信支付，订单管理等功能。

当前仓库为虾皮购物的**项目模板**。

### 技术栈

- 前端框架：[uni-app](https://uniapp.dcloud.net.cn/) (Vue3 + Typescript(Setup))
- 状态管理：[pinia](https://pinia.vuejs.org/zh/)
- 组件库：[uni-ui](https://uniapp.dcloud.net.cn/component/uniui/uni-ui.html)

## 运行程序

1. 安装依赖

```shell
# pnpm
pnpm i --registry=https://registry.npmmirror.com
```

2. 运行程序

```shell
# 微信小程序端
pnpm run dev:mp-weixin

# H5端
pnpm run dev:h5

# App端
需 HbuilderX 工具，运行 - 运行到手机或模拟器
```

3. 微信开发者工具导入 `/dist/dev/mp-weixin` 目录

# 📦 功能说明

- [ ] 安装 UI 组件
- [ ] Pinia 组件
- [ ] 安装 request 组件并增加拦截器
- [ ] 请求失败处理
- [ ] 请求成功处理
- [ ] 首页开发
  - [ ] 自定义导航
  - [ ] 轮播图数据和渲染
  - [ ] 商品分类陈列
  - [ ] 热门推荐
  - [ ] 猜你喜欢
  - [ ] 骨架屏
  - [ ] 首页下拉刷新
  - [ ] 热门推荐
- [ ] 商品
  - [ ] 分类数据绑定
  - [ ] 分类骨架屏
  - [ ] 详情数据绑定
  - [ ] 详情骨架屏
- [ ] 登录
  - [ ] 快捷登录
  - [ ] 保存登录信息
- [ ] 会员中心

  - [ ] 会员信息展示
  - [ ] 分页加载
  - [ ] 分页预下载
  - [ ] 退出登录
  - [ ] 个人信息
  - [ ] 地址信息
  - [ ] 购物车
  - [ ] 订单详情
  - [ ] ....

- [ ] 项目打包
  - [ ] 微信小程序打包发布
  - [ ] IOS 打包
  - [ ] 跨端兼容
- [ ]
