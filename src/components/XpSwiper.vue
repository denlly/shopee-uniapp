<template>
  <view>
    <swiper
      class="banner"
      :indicator-dots="true"
      :indicator-active-color="'#fff'"
      :circular="true"
      :autoplay="false"
    >
      <swiper-item v-for="banner in props.banners" :key="banner.id">
        <image :src="banner.imgUrl" @tap="onPreviewImage(banner.imgUrl)"></image>
      </swiper-item>
    </swiper>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { type Banner } from '@/types/banner.d'
const props = defineProps({ banners: Array<Banner> })

function onPreviewImage(url: string): void {
  uni.previewImage({
    urls: props.banners.map((e: Banner) => e.imgUrl),
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
