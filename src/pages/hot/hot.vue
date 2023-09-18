<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        :class="idx === activeIndex ? 'text active' : 'text'"
        v-for="(sub, idx) in subTypes"
        :key="sub.id"
        @tap="activeIndex = idx"
      >
        {{ sub.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      scroll-y
      class="scroll-view"
      v-for="(item, idx) in subTypes"
      :key="item.id"
      v-show="activeIndex === idx"
      @scrolltolower="onScrollToLower()"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="item in subTypes[activeIndex].goodsItems?.items"
          :key="item"
          :url="`/pages/goods/goods?id={item.id}`"
        >
          <image class="thumb" :src="item.picture"></image>
          <view class="name ellipsis">{{ item.name }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ item.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
        {{ item.finish ? '数据就这么多了，都拿去吧' : '正在加载...' }}
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getHotRecommendAPI } from '@/services/hot'
import type { Paging } from '@/types/global'
import type { HotResult, HotSubType, HotGoodItem } from '@/types/hot'

const query = defineProps<{ type: string }>()

// const list
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const currentHot = hotMap.find((e) => e.type === query.type)
uni.setNavigationBarTitle({ title: currentHot?.title })
const subTypes = ref<(HotSubType & { finish?: boolean })[]>([])

const activeIndex = ref(0)
// 推荐封面图
const bannerPicture = ref('')

const hotList = ref<HotResult>()

/** 动态数据标识 */
const getHotRecommend = async () => {
  getHotRecommendAPI(currentHot!.url, { page: 1, pageSize: 10 }).then((res) => {
    // res.result
    console.log(res.result, 'res.result')
    hotList.value = res.result
    bannerPicture.value = res.result.bannerPicture
    subTypes.value = res.result.subTypes
  })
}

onLoad(() => {
  getHotRecommend()
})

const onScrollToLower = async () => {
  const currentSubTypes = subTypes.value[activeIndex.value]
  if (currentSubTypes.goodsItems.page < currentSubTypes.goodsItems.pages) {
    // 当前页码累加
    currentSubTypes.goodsItems.page++
  } else {
    // 标记已结束
    currentSubTypes.finish = true
    // 退出并轻提示
    return uni.showToast({ icon: 'none', title: '数据就这么多了~' })
  }
  getHotRecommendAPI(currentHot!.url, {
    subType: currentSubTypes.id,
    page: currentSubTypes.goodsItems.page,
    pageSize: currentSubTypes.goodsItems.pageSize,
  }).then((res) => {
    const newSubTypes = res.result.subTypes[activeIndex.value]
    currentSubTypes.goodsItems.items.push(...newSubTypes.goodsItems.items)
  })
}
</script>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}
.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.scroll-view {
  flex: 1;
}
.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;
  .text {
    margin: 0 20rpx;
    position: relative;
  }
  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}
.goods {
  display: flex;
  flex-wrap: wrap;
  padding: 0 20rpx 20rpx;
  justify-content: space-between;

  .navigator {
    border-radius: 10rpx;
    background-color: #fff;
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
  }
  .thumb {
    width: 305rpx;
    height: 305rpx;
  }
  .name {
    height: 88rpx;
    font-size: 26rpx;
  }
  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }
  .symbol {
    font-size: 70%;
  }
  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
