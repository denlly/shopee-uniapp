<template>
  <view class="index">
    <CustomNavbar></CustomNavbar>
    <scroll-view
      refresher-enabled
      @refresherrefresh="onFresherRefresh"
      scroll-y
      class="scroll-view"
      @scrolltolower="onScrollToLower"
      :refresher-triggered="isRefreshing"
    >
      <PageSkeleton v-if="isLoading"></PageSkeleton>
      <template v-else>
        <XpSwiper :banners="bannerList"></XpSwiper>
        <CategoryPanel :categories="categoryList" />
        <!-- 热门模块 -->
        <HotPanel :hots="hotList" />
        <XpGuess ref="guessRef"></XpGuess>
        <!-- <RecommandPanel /> -->
      </template>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import RecommandPanel from './components/RecommandPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref, onMounted } from 'vue'
import type { Banner, Category, Hot } from '@/types/home.d'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { XpGuess } from '@/types/components'
import { useGuessList } from '@/composables'
const bannerList = ref<Banner[]>()
const categoryList = ref<Category[]>()
const hotList = ref<Hot[]>()
const isRefreshing = ref(false)
const isLoading = ref(false)
onLoad(async () => {
  isLoading.value = true
  //首屏数据渲染
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isLoading.value = false
})
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI('1')
  bannerList.value = res.result
}
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
const onFresherRefresh = async () => {
  //开启加载
  isRefreshing.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  //结束加载

  isRefreshing.value = false
}

const { guessRef, onScrollToLower } = useGuessList()
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  flex-direction: column;
  display: flex;
}
.scroll-view {
  flex: 1;
}
</style>
