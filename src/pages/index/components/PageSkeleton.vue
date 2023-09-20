<template name="skeleton">
  <view class="sk-container">
    <view is="components/XpSwiper">
      <view>
        <swiper
          circular="true"
          class="banner XpSwiper--banner"
          indicator-active-color="#fff"
          :indicator-dots="true"
          :current="0"
          :autoplay="false"
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
    <view is="pages/index/components/CategoryPanel">
      <view class="category CategoryPanel--category">
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-984 sk-text"
            >居家</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-673 sk-text"
            >锦鲤</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-558 sk-text"
            >服饰</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-705 sk-text"
            >母婴</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-162 sk-text"
            >个护</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-541 sk-text"
            >严选</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-605 sk-text"
            >数码</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-382 sk-text"
            >运动</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-320 sk-text"
            >杂项</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="note">
          <image class="icon CategoryPanel--icon sk-image" mode="aspectFit"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-902 sk-text"
            >品牌</text
          >
        </navigator>
      </view>
    </view>
    <view is="pages/index/components/HotPanel">
      <view
        class="panel HotPanel--panel hot HotPanel--hot data-v-df6c854a HotPanel--data-v-df6c854a"
      >
        <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-7 sk-text"
              >特惠推荐</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-571 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-908 sk-text"
              >爆款推荐</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-138 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-598 sk-text"
              >一站买全</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-797 sk-text"
              >精心优选</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
        <view class="item HotPanel--item data-v-df6c854a HotPanel--data-v-df6c854a">
          <view class="title HotPanel--title data-v-df6c854a HotPanel--data-v-df6c854a">
            <text
              class="title-text HotPanel--title-text data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-525 sk-text"
              >新鲜好物</text
            >
            <text
              class="title-desc HotPanel--title-desc data-v-df6c854a HotPanel--data-v-df6c854a sk-transparent sk-text-14-2857-352 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator
            class="cards HotPanel--cards data-v-df6c854a HotPanel--data-v-df6c854a"
            hover-class="none"
          >
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
            <image
              class="image HotPanel--image data-v-df6c854a HotPanel--data-v-df6c854a sk-image"
              mode="aspectFit"
            ></image>
          </navigator>
        </view>
      </view>
    </view>
    <view is="components/XpGuess" class="r">
      <view class="caption XpGuess--caption data-v-6c59c4f4 XpGuess--data-v-6c59c4f4">
        <text
          class="text XpGuess--text data-v-6c59c4f4 XpGuess--data-v-6c59c4f4 sk-transparent sk-text-0-0000-21 sk-text sk-pseudo sk-pseudo-circle"
          >猜你喜欢</text
        >
      </view>
    </view>
  </view>
</template>
<style lang="scss">
.sk-text-3-3333-728 {
  background-image: linear-gradient(
    transparent 3.3333%,
    #eeeeee 0%,
    #eeeeee 96.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 26.285rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-330 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2523rpx;
  position: relative !important;
}
.sk-text-14-2857-984 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-673 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-558 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-705 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-162 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-541 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-605 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-382 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-320 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-902 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-7 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-571 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-908 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-138 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-598 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-797 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-525 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-352 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-0-0000-21 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 31.5421rpx;
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
