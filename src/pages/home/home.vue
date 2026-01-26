<template>
  <view class="content">
    <image class="bg" :src="bgImageUrl[0]" />

    <!-- 模块入口区域 -->
    <view class="module-container">
      <view v-if="bgImageUrl[0]" class="module-item knowledge-base" @click="handleExam">
        <text class="module-title">JavaScript小测</text>
      </view>

    </view>

  </view>
</template>

<script setup lang="ts">
import useCloudFiles from '@/utils/useCloudFiles';

const bgImageUrl = useCloudFiles(['/static/img/bg-2.avif']);

function handleExam() {
  uni.navigateTo({
    url: '/pages/exam/exam'
  })
}

</script>

<style lang="scss">
@import './home.scss';
</style>
