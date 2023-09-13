<template>
  <view class="index">
    <CustomNavbar></CustomNavbar>
    <XpSwiper :banners="bannerList"></XpSwiper>
    <CategoryPanel :categories="categoryList" />
    <span>index</span>
  </view>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { Banner, Category } from '@/types/home.d'
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CategoryPanel from './components/CategoryPanel.vue'

const bannerList = ref<Banner[]>(null)
const categoryList = ref<Category[]>(null)
onLoad(async () => {
  getHomeBannerAPI('1').then((res) => {
    console.log(res, 'getHomeBannerAPI res')
    bannerList.value = res.result
  })
  getHomeCategoryAPI().then((res) => {
    console.log(res, 'getHomeCategoryAPI')
    categoryList.value = res.result
  })
})
</script>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
