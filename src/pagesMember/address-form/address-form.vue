<script setup lang="ts">
import { ref } from 'vue'
import type { AddressParams } from '../../types/address.d'
import { onLoad } from '@dcloudio/uni-app'
import {
  postMemberAddressAPI,
  getMemberAddressByIdAPI,
  putMemberAddressByIdAPI,
} from '../../services/address'
// 表单数据
const addressForm = ref({
  receiver: '', // 收货人
  contact: '', // 联系方式
  fullLocation: '', // 省市区(前端展示)
  provinceCode: '', // 省份编码(后端参数)
  cityCode: '', // 城市编码(后端参数)
  countyCode: '', // 区/县编码(后端参数)
  address: '', // 详细地址
  isDefault: 0, // 默认地址，1为是，0为否
})
const query = defineProps<{
  id?: string
}>()
uni.setNavigationBarTitle({ title: query.id ? '修改地址' : '新建地址' })
//定义一个对象
onLoad(() => {
  if (query.id) {
    //编辑状态并初始化数据
    getMemberAddressData()
  }
})
const getMemberAddressData = async () => {
  const res = await getMemberAddressByIdAPI(query.id!)
  if (res.code != '1') {
    uni.showToast({ title: '服务端获取失败', icon: 'error' })
  } else {
    addressForm.value = res.result
  }
}
const onReginChange = (event) => {
  addressForm.value.fullLocation = event.detail.value.join(' ')
  const [provinceCode, cityCode, countyCode] = event.detail.code
  addressForm.value = Object.assign(addressForm.value, {
    provinceCode,
    cityCode,
    countyCode,
  })
}
const onSwitchChange = (event) => {
  addressForm.value.isDefault = event.detail.value ? 1 : 0
}
const onSubmit = async () => {
  console.log(addressForm.value, query.id, 'addressForm.value')
  let res
  if (query.id) {
    res = await putMemberAddressByIdAPI(query.id!, addressForm.value as AddressParams)
    setTimeout(() => {
      uni.navigateBack()
    }, 1000)
  } else {
    res = await postMemberAddressAPI(addressForm.value as AddressParams)
  }

  if (res.code === '1') {
    uni.showToast({ title: '保存成功', icon: 'success' })
  } else {
    uni.showToast({ title: '服务端保存失败', icon: 'error' })
  }
}

// // 校验规则
// const rules = {
//   receiver: {
//     required: true,
//     type: String,
//   },
// }
</script>

<template>
  <view class="content">
    <uin-form>
      <!-- 表单内容 -->
      <view class="form-item">
        <text class="label">收货人</text>
        <input class="input" placeholder="请填写收货人姓名" v-model="addressForm.receiver" />
      </view>
      <view class="form-item">
        <text class="label">手机号码</text>
        <input class="input" placeholder="请填写收货人手机号码" v-model="addressForm.contact" />
      </view>
      <view class="form-item">
        <text class="label">所在地区</text>
        <picker
          @change="onReginChange"
          class="picker"
          mode="region"
          :value="addressForm.fullLocation.split(' ')"
        >
          <view v-if="!!addressForm.fullLocation">{{ addressForm.fullLocation }}</view>
          <view v-else class="placeholder">请选择省/市/区(县)</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <input class="input" placeholder="街道、楼牌号等信息" v-model="addressForm.address" />
      </view>
      <view class="form-item">
        <label class="label">设为默认地址</label>
        <switch
          @change="onSwitchChange"
          class="switch"
          color="#27ba9b"
          :checked="!!addressForm.isDefault"
        />
      </view>
    </uin-form>
  </view>
  <!-- 提交按钮 -->
  <button class="button" @tap="onSubmit">保存并使用</button>
  <!-- {{ addressForm }} -->
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.content {
  margin: 20rpx 20rpx 0;
  padding: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .form-item,
  .uni-forms-item {
    display: flex;
    align-items: center;
    min-height: 96rpx;
    padding: 25rpx 10rpx 40rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;
    margin-bottom: 0;

    // 调整 uni-forms 样式
    .uni-forms-item__content {
      display: flex;
    }

    .uni-forms-item__error {
      margin-left: 200rpx;
    }

    &:last-child {
      border: none;
    }

    .label {
      width: 200rpx;
      color: #333;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .switch {
      position: absolute;
      right: -20rpx;
      transform: scale(0.8);
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }
}

.button {
  height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
