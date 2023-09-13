<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="note"
      url="#"
      v-for="item in props.categories"
      :key="item.id"
    >
      <image :src="item.icon" class="icon" mode="aspectFit" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>
<script setup lang="ts">
import type { Category } from '@/types/home.d'
import { onLoad } from '@dcloudio/uni-app'
const props = defineProps({
  categories: Array<Category>,
})
</script>
<style lang="scss">
.category {
  background-color: #f7f7f7;
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;
  .category-item {
    width: 20%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
