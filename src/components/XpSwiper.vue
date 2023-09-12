<template>
  <view>
    <swiper
      class="banner"
      :indicator-dots="true"
      :indicator-active-color="'#fff'"
      :circular="true"
      :autoplay="false"
    >
      <swiper-item v-for="banner in bannerList" :key="banner.id">
        <image :src="banner.imgUrl" @tap="onPreviewImage(banner.imgUrl)"></image>
      </swiper-item>
    </swiper>
  </view>
</template>
<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { http, ResultView } from '@/utils/http'
type Banner = { id: number; imgUrl: string }
const bannerList = ref<Banner[]>(null)

watchEffect(async () => {
  http<Banner>({
    method: 'GET',
    url: '/home/banner',
  }).then((res: ResultView<Banner>) => {
    bannerList.value = res.result
  })
})

function onPreviewImage(url: string) {
  uni.previewImage({
    urls: bannerList.value.map((e) => e.imgUrl),
  })
}
</script>

<style lang="scss">
.banner,
.banner image {
  display: flex;
  width: 100%;
  height: 300rpx;
}
</style>
