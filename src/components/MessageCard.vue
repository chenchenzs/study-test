<template>
  <view class="message-card" :class="type">
    <image class="avatar" :src="type === 'user' ? '' : '/static/img/avatar-robot.jpg'" mode="aspectFill" />
    <view class="bubble">
      <text class="message-text">{{ displayedMessage }}</text>
      <text v-if="time" class="message-time">{{ time }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';

interface Props {
  type: 'user' | 'robot';
  message: string;
  time?: string;
  isPast?: boolean;
}
const { type, message, time, isPast } = defineProps<Props>();
const displayedMessage = ref('');
const speed = 50; // 打字速度（毫秒）

const typeWriter = async (text: string) => {
  displayedMessage.value = '';
  for (let i = 0; i < text.length; i++) {
    displayedMessage.value += text[i];
    await new Promise(resolve => setTimeout(resolve, speed));
  }
};

onMounted(() => {
  console.log('message', message);
  
  if (type === 'robot' && !isPast) {
    typeWriter(message);
  } else {
    displayedMessage.value = message;
  }
});

</script>

<style lang="scss">
@import './MessageCard.scss';
</style>
