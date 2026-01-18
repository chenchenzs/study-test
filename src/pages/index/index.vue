<template>
  <view class="content">
    <image class="bg" :src="bgImageUrl[0]" />

    <view class="start-btn" @click="handleClick">
      <view class="text-area">
        <text class="title" :class="{ 'fade-out': isFading }" :style="{ opacity: fadeOpacity }">{{ title }}</text>
      </view>
    </view>

  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useCloudFiles from '@/utils/useCloudFiles';

const title = ref('点击进入天天考试')
const fadeOpacity = ref(1)
const isFading = ref(false)
const bgImageUrl = useCloudFiles(['/static/img/bg-3.png'])

const handleClick = () => {
  if (isFading.value) return // 防止重复点击
  
  isFading.value = true
  
  // 使用setInterval实现平滑淡出，确保uni-app兼容性
  const duration = 2000 // 淡出持续时间
  const frameRate = 60 // 帧率
  const totalFrames = duration / (1000 / frameRate)
  let currentFrame = 0
  
  const interval = setInterval(() => {
    currentFrame++
    const progress = Math.min(currentFrame / totalFrames, 1)
    
    // 计算当前透明度，使用ease-out缓动函数
    fadeOpacity.value = 1 - (1 - Math.pow(1 - progress, 3))
    
    if (progress >= 0.5) {
      clearInterval(interval)
      uni.redirectTo({
        url: '/pages/home/home'
      })
    }
  }, 1000 / frameRate)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
