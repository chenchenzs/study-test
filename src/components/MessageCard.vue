<template>
  <view class="message-card" :class="type">
    <image class="avatar" :src="type === 'user' ? '' : '/static/img/avatar-robot.jpg'" mode="aspectFill" />
    <view class="bubble">
      <text v-if="type === 'user'" class="message-text">{{ message }}</text>
      <text v-if="type === 'robot'" class="message-text">{{ message }}</text>
      <text v-if="time" class="message-time">{{ time }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
interface Props {
  type: 'user' | 'robot';
  message: string | number;
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
