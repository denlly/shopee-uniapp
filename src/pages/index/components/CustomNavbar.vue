<template>
  <view class="navbar" :style="{ paddingTop: (safeArea ? safeArea.top : 0) + 'px' }">
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">大牌 高调 奢华</text>
    </view>
    <view class="logo">
      <view class="input">
        <text class="icon-search">搜索商品</text>
        <text class="icon-scan"></text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const { safeArea } = uni.getWindowInfo()
</script>

<style scoped lang="scss">
.navbar {
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .logo {
    display: flex;
    align-items: center;
    height: 96rpx;
    padding-left: 30rpx;
    padding-top: 20rpx;
    padding-bottom: 30rpx;
    justify-content: center;
    .input {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      height: 64rpx;
      padding: auto 30rpx;
      color: #8b8b8b;
      font-size: 28rpx;
      border-radius: 32rpx;
      background-color: #f3f4f4;
    }
    .logo-image {
      width: 166rpx;
      height: 44rpx;
    }
    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }
  .search {
    display: flex;

    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);
  }
  .icon-search {
    padding-left: 20rpx;
    &::before {
      margin-right: 10rpx;
    }
  }
  .icon-scan {
    font-size: 30rpx;
    padding: 15rpx;
  }
}
</style>
