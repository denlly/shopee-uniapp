<template>
  <view class="index">
    <CustomNavbar></CustomNavbar>
    <XpSwiper :banners="bannerList"></XpSwiper>
    <span>index</span>
  </view>
</template>

<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { type Banner } from '@/types/banner.d'
import { getHomeBannerAPI } from '@/services/home'

const bannerList = ref<Banner[]>(null)
onLoad(async () => {
  getHomeBannerAPI<Banner>('1').then((res) => {
    console.log(res, 'getHomeBannerAPI res')
    bannerList.value = res.result
  })
})
</script>

<style lang="scss">
//
</style>
