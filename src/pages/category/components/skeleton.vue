<template name="skeleton">
  <view class="categories">
    <scroll-view scroll-y="true" class="primary">
      <view
        class="item active sk-transparent sk-text-14-2857-941 sk-text sk-pseudo sk-pseudo-circle"
        >居家</view
      >
      <view class="item sk-transparent sk-text-14-2857-833 sk-text sk-pseudo sk-pseudo-circle"
        >美食</view
      >
      <view class="item sk-transparent sk-text-14-2857-678 sk-text sk-pseudo sk-pseudo-circle"
        >服饰</view
      >
      <view class="item sk-transparent sk-text-14-2857-66 sk-text sk-pseudo sk-pseudo-circle"
        >母婴</view
      >
      <view class="item sk-transparent sk-text-14-2857-670 sk-text sk-pseudo sk-pseudo-circle"
        >个护</view
      >
      <view class="item sk-transparent sk-text-14-2857-159 sk-text sk-pseudo sk-pseudo-circle"
        >严选</view
      >
      <view class="item sk-transparent sk-text-14-2857-444 sk-text sk-pseudo sk-pseudo-circle"
        >数码</view
      >
      <view class="item sk-transparent sk-text-14-2857-895 sk-text sk-pseudo sk-pseudo-circle"
        >运动</view
      >
      <view class="item sk-transparent sk-text-14-2857-685 sk-text sk-pseudo sk-pseudo-circle"
        >杂项</view
      >
    </scroll-view>
    <scroll-view scroll-y="true" class="secondary">
      <view is="components/XpSwiper" class="banner">
        <view>
          <swiper
            circular="true"
            class="banner XpSwiper--banner"
            indicator-active-color="#fff"
            indicator-dots="true"
            current="0"
            autoplay="false"
          >
            <swiper-item
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <image class="sk-image"></image>
            </swiper-item>
          </swiper>
        </view>
      </view>
      <view class="panel">
        <view class="title">
          <text class="name sk-transparent sk-text-27-9412-762 sk-text">居家生活用品</text>
          <navigator
            class="more sk-transparent sk-text-30-8824-343 sk-text sk-pseudo sk-pseudo-circle"
            hover-class="none"
            >全部</navigator
          >
        </view>
        <view class="section">
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-802 sk-text"
              >极光限定 珠光蓝珐琅锅</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-475 sk-text">199.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-927 sk-text"
              >泸州老窖特曲浓香型白酒</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-834 sk-text">280.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-430 sk-text"
              >德国莫泽尔传统版雷司令干白2019750ml</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-232 sk-text">138.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-762 sk-text"
              >冻干藤椒豚骨面74克*12盒</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-324 sk-text">79.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-411 sk-text"
              >梅乃宿柚子酒720毫升</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-755 sk-text">248.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-280 sk-text"
              >从江香猪油辣椒218克</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-602 sk-text">28.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-842 sk-text"
              >现泡免煮，螺蛳粉370克*6盒</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-926 sk-text">78.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-651 sk-text"
              >木桐正牌干红葡萄酒750毫升2016年</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-961 sk-text">7799.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
            <view class="name ellipsis sk-transparent sk-text-14-2857-973 sk-text"
              >冻干藤椒牛肉面70克*12盒</view
            >
            <view class="price">
              <text class="symbol sk-transparent sk-opacity">¥</text>
              <text class="number sk-transparent sk-text-14-2857-641 sk-text">79.00</text>
            </view>
          </navigator>
          <navigator class="goods" hover-class="none">
            <image class="image sk-image"></image>
          </navigator>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style lang="scss">
/*
此文件为开发者工具生成，生成时间: 2023/9/22 下午1:10:02

在 D:\git_projects\shopee-uniapp.git\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}
.sk-text-14-2857-568 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.7991rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-941 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-833 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-678 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-66 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-670 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-159 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-444 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-895 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-685 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-27-9412-762 {
  background-image: linear-gradient(
    transparent 27.9412%,
    #eeeeee 0%,
    #eeeeee 72.0588%,
    transparent 0%
  ) !important;
  background-size: 100% 59.5794rpx;
  position: relative !important;
}
.sk-text-30-8824-343 {
  background-image: linear-gradient(
    transparent 30.8824%,
    #eeeeee 0%,
    #eeeeee 69.1176%,
    transparent 0%
  ) !important;
  background-size: 100% 59.5794rpx;
  position: relative !important;
}
.sk-text-14-2857-802 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-opacity {
  opacity: 0 !important;
}
.sk-text-14-2857-475 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-927 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-834 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-430 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-232 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-762 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-324 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-411 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-755 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-280 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-602 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-842 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-926 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-651 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-961 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-973 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.4393rpx;
  position: relative !important;
}
.sk-text-14-2857-641 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
