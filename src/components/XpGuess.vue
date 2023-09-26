<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in pageResult?.items"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ isFinish ? '已经没有更多的信息了' : '正在加载...' }} </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getHomeGuessAPI } from '@/services/home'
import type { PageResult, Paging } from '@/types/global'
import type { Guess } from '@/types/home'
import { onLoad, onShow } from '@dcloudio/uni-app'

const isFinish = ref(false)
// const dataList = ref<Required<PageResult<Guess>>>()
const pageResult = ref<PageResult<Guess>>()

defineExpose({ resetData, getMore })
// const props = defineProps({
//   guesses: Array<Guess>,
// })
onLoad(async () => {})
onShow(async () => {
  // console.log(getHomeGuessAPI, 'xpGuess onShow')
  await getMoreHomeGuess({ page: 1, pageSize: 10 })
})

/**
 *
 */
const resetData = () => {
  // dataList.value =
}
/**
 *
 * @param paging
 */
const getMoreHomeGuess = async (paging: Paging) => {
  getHomeGuessAPI(paging).then((res: { result: PageResult<Guess> }) => {
    console.log(res, 'getHomeGuessAPI res')
    pageResult.value = res.result
  })
}
async function getMore() {
  console.log('getMore method')
  if (pageResult.value!.page < pageResult.value!.pages) {
    isFinish.value = false
    pageResult.value!.page++
  } else {
    isFinish.value = true
  }
  getHomeGuessAPI({
    page: pageResult.value?.page,
    pageSize: pageResult.value?.pageSize,
  }).then((res: { result: PageResult<Guess> }) => {
    pageResult.value?.items.push(...res.result.items)
  })
}
</script>

<style scoped lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
