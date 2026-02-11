<template>
  <view class="message-card" :class="type">
    <image class="avatar" :src="avatar" mode="aspectFill" />
    <view class="bubble">
      <text class="message-text">{{ message }}</text>
      <text v-if="time" class="message-time">{{ time }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  type?: 'user' | 'robot';
  message: string | number;
  avatar: string;
  time?: string;
}

withDefaults(defineProps<Props>(), {
  type: 'robot',
  time: ''
});
</script>

<style lang="scss">
@import './MessageCard.scss';
</style>
