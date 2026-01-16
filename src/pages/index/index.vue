<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button class="btn" @click="goToHome">跳转到首页</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Hello World - Updated')

const goToHome = () => {
  uni.navigateTo({
    url: '/pages/home/home'
  })
}
</script>

<style lang="scss">
@import './index.scss';

.btn {
  margin-top: 50rpx;
  padding: 20rpx 40rpx;
  background-color: #007aff;
  color: #fff;
  border-radius: 10rpx;
  font-size: 32rpx;
}
</style>
