<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref, computed } from 'vue'
import { getGoodByIdAPI } from '@/services/goods'
import type { GoodsResult, SkuItem, SpecItem } from '@/types/goods'
import type {
  SkuPopupEvent,
  SkuPopupInstance,
  SkuPopupLocaldata,
} from '@/components/vk-data-goods-sku-popup/vk-data-goods-sku.popup'
import { postMemberAddressAPI } from '@/services/address'
import { postMemberCartAPI } from '@/services/carts'

const { safeAreaInsets } = uni.getSystemInfoSync()
const query = defineProps<{ id: string }>()
const good = ref<GoodsResult>({} as GoodsResult)
const currentPicIdx = ref(0)
const isShowSku = ref(false)
const skuMode = ref<SkuMode>(1)
const goodsInfo = ref<SkuPopupLocaldata>({} as SkuPopupLocaldata)

const skuPopupRef = ref<SkuPopupInstance>()

const selectPopup = computed(() => {
  return skuPopupRef.value?.selectArr?.join(' ').trim() || '请选择商品规格'
})
enum SkuMode {
  Both = 1,
  Cart = 2,
  Buy = 3,
}

onLoad(async () => {
  await getGoodById()
})
const getGoodById = async () => {
  console.log(query, 'props.id')
  if (!query.id) {
    uni.showToast({
      msg: '缺少参数',
      icon: 'fail',
    })
    return
  }
  const res = await getGoodByIdAPI(query.id)
  console.log(res, 'res')
  good.value = res.result
  goodsInfo.value = {
    _id: res.result.id,
    name: res.result.name,
    goods_thumb: res.result.mainPictures[0],
    sku_list: res.result.skus.map((item: SkuItem) => {
      return {
        _id: item.id,
        goods_name: item.id,
        goods_id: item.id,
        image: item.picture,
        price: item.price * 100,
        stock: item.inventory,
        sku_name_arr: item.specs.map((si) => si.valueName),
      }
    }),
    spec_list: res.result.specs.map((item: SpecItem) => {
      return {
        name: item.name,
        list: item.values,
      }
    }),
  }
}
const onSwiperChange = (event) => {
  currentPicIdx.value = event.detail.current
}

const onOpenSkuPopup = () => {
  console.log('onOpenSkuPopup')
  /**
   * 获取商品信息
   * 这里可以看到每次打开SKU都会去重新请求商品信息,为的是每次打开SKU组件可以实时看到剩余库存
   */
  isShowSku.value = true
}

const onCloseSkuPopup = () => {
  console.log('监听 - 关闭sku组件')
}
const addCartFn = (obj) => {
  let { selectShop } = obj
  // 模拟添加到购物车,请替换成你自己的添加到购物车逻辑
  let res = {}
  let name = selectShop.goods_name
  if (selectShop.sku_name != '默认') {
    name += '-' + selectShop.sku_name_arr
  }
  res.msg = `${name} 已添加到购物车`
  if (typeof obj.success == 'function') obj.success(res)
}
// 加入购物车按钮
const onAddCart = (selectShop: SkuPopupEvent) => {
  console.log(selectShop, '监听 - 加入购物车')
  addCartFn({
    selectShop: selectShop,
    success: async function (res) {
      // 实际业务时,请替换自己的加入购物车逻辑
      const sender = await postMemberCartAPI({
        skuId: selectShop._id,
        count: selectShop.buy_num,
      })
      console.log(sender, 'sender')
      toast(res.msg)
      setTimeout(function () {
        isShowSku.value = false
      }, 300)
    },
  })
}
const onBuyNow = (selectShop) => {
  console.log('监听 - 立即购买')
  addCartFn({
    selectShop: selectShop,
    success: function (res) {
      // 实际业务时,请替换自己的立即购买逻辑
      toast('立即购买')
    },
  })
}
const onSelectSpecs = (mode: SkuMode) => {
  skuMode.value = mode
  isShowSku.value = true
}

const toast = (msg) => {
  uni.showToast({
    title: msg,
    icon: 'none',
  })
}
</script>
<template>
  <vk-data-goods-sku-popup
    ref="skuPopupRef"
    v-model="isShowSku"
    border-radius="20"
    :localdata="goodsInfo"
    :mode="skuMode"
    @open="onOpenSkuPopup"
    @close="onCloseSkuPopup"
    @add-cart="onAddCart"
    @buy-now="onBuyNow"
    add-cart-background-color="#FFA868"
    buy-now-background-color="#E96100"
  ></vk-data-goods-sku-popup>
  <scroll-view scroll-y class="viewport">
    <!-- 基本信息 -->
    <view class="goods">
      <!-- 商品主图 -->
      <view class="preview">
        <swiper circular @change="onSwiperChange">
          <swiper-item v-for="(pic, idx) in good.mainPictures" :key="idx">
            <image mode="aspectFill" :src="pic" />
          </swiper-item>
        </swiper>
        <view class="indicator">
          <text class="current">{{ currentPicIdx + 1 }}</text>
          <text class="split">/</text>
          <text class="total">{{ good.mainPictures?.length }}</text>
        </view>
      </view>

      <!-- 商品简介 -->
      <view class="meta">
        <view class="price">
          <text class="symbol">¥</text>
          <text class="number">{{ good.price }}</text>
        </view>
        <view class="name ellipsis">{{ good.name }} </view>
        <view class="desc"> {{ good.desc }} </view>
      </view>

      <!-- 操作面板 -->
      <view class="action">
        <view class="item arrow" @tap="onSelectSpecs(SkuMode.Both)">
          <text class="label">选择</text>
          <text class="text ellipsis"> {{ selectPopup }} </text>
        </view>
        <view class="item arrow">
          <text class="label">送至</text>
          <text class="text ellipsis"> 请选择收获地址 </text>
        </view>
        <view class="item arrow">
          <text class="label">服务</text>
          <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
        </view>
      </view>
    </view>

    <!-- 商品详情 -->
    <view class="detail panel">
      <view class="title">
        <text>详情</text>
      </view>
      <view class="content">
        <view class="properties">
          <!-- 属性详情 -->
          <view class="item">
            <text class="label">属性名</text>
            <text class="value">属性值</text>
          </view>
          <view class="item">
            <text class="label">属性名</text>
            <text class="value">属性值</text>
          </view>
        </view>
        <!-- 图片详情 -->
        <image
          mode="widthFix"
          src="https://yanxuan-item.nosdn.127.net/a8d266886d31f6eb0d7333c815769305.jpg"
        ></image>
        <image
          mode="widthFix"
          src="https://yanxuan-item.nosdn.127.net/a9bee1cb53d72e6cdcda210071cbd46a.jpg"
        ></image>
      </view>
    </view>

    <!-- 同类推荐 -->
    <view class="similar panel">
      <view class="title">
        <text>同类推荐</text>
      </view>
      <view class="content">
        <navigator
          v-for="item in 4"
          :key="item"
          class="goods"
          hover-class="none"
          :url="`/pages/goods/goods?id=`"
        >
          <image
            class="image"
            mode="aspectFill"
            src="https://yanxuan-item.nosdn.127.net/e0cea368f41da1587b3b7fc523f169d7.png"
          ></image>
          <view class="name ellipsis">简约山形纹全棉提花毛巾</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">18.50</text>
          </view>
        </navigator>
      </view>
    </view>
  </scroll-view>

  <!-- 用户操作 -->
  <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <view class="icons">
      <button class="icons-button"><text class="icon-heart"></text>收藏</button>
      <button class="icons-button" open-type="contact">
        <text class="icon-handset"></text>客服
      </button>
      <navigator class="icons-button" url="/pages/cart/cart" open-type="switchTab">
        <text class="icon-cart"></text>购物车
      </navigator>
    </view>
    <view class="buttons">
      <view class="addcart" @click="onSelectSpecs(SkuMode.Cart)"> 加入购物车 </view>
      <view class="buynow" @click="onSelectSpecs(SkuMode.Buy)"> 立即购买 </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport {
  background-color: #f4f4f4;
}

.panel {
  margin-top: 20rpx;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;
    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }
    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}

.arrow {
  &::after {
    position: absolute;
    top: 50%;
    right: 30rpx;
    content: '\e6c2';
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 商品信息 */
.goods {
  background-color: #fff;
  .preview {
    height: 750rpx;
    position: relative;
    .image {
      width: 750rpx;
      height: 750rpx;
    }
    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;
      .current {
        font-size: 26rpx;
      }
      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }
      .total {
        font-size: 24rpx;
      }
    }
  }
  .meta {
    position: relative;
    border-bottom: 1rpx solid #eaeaea;
    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #e96100;
    }
    .number {
      font-size: 56rpx;
    }
    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }
    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #333;
    }
    .desc {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #cf4444;
    }
  }
  .action {
    padding-left: 20rpx;
    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid #eaeaea;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;
      &:last-child {
        border-bottom: 0 none;
      }
    }
    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }
    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 商品详情 */
.detail {
  padding-left: 20rpx;
  .content {
    margin-left: -20rpx;
    .image {
      width: 100%;
    }
  }
  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;
    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }
    .label {
      width: 200rpx;
    }
    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  .content {
    padding: 0 20rpx 200rpx;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;
    .goods {
      width: 340rpx;
      padding: 24rpx 20rpx 20rpx;
      margin: 20rpx 7rpx;
      border-radius: 10rpx;
      background-color: #fff;
    }
    .image {
      width: 300rpx;
      height: 260rpx;
    }
    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
    }
    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #de6808;
    }
    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }
  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

/* 底部工具栏 */
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  height: 100rpx;
  padding: 0 20rpx var(--window-bottom);
  border-top: 1rpx solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
  .buttons {
    display: flex;
    & > view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }
    .addcart {
      background-color: #ffa868;
    }
    .buynow,
    .payment {
      background-color: #e96100;
      margin-left: 20rpx;
    }
  }
  .icons {
    padding-right: 10rpx;
    display: flex;
    align-items: center;
    flex: 1;
    .icons-button {
      flex: 1;
      text-align: center;
      line-height: 1.4;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #333;
      background-color: #fff;
      &::after {
        border: none;
      }
    }
    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
</style>
