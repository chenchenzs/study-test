<template>
  <view class="content">

    <view class="messageList">
      <scroll-view class="scroll-list" scroll-y>
        <view v-for="(msg, index) in messageList" :key="index" :id="'msg-' + index" class="message-item">
          <MessageCard :type="index % 2 === 0 ? 'user' : 'robot'" :message="String(msg)"
            :avatar="index % 2 === 0 ? userAvatar : robotAvatar" :time="new Date().toLocaleTimeString()" />
        </view>
      </scroll-view>
    </view>
    <view class="inputArea">
      <up-input placeholder="请输入内容" border="surround" v-model="userInPut" @change="handleInput">
        <template #suffix>
          <up-button @tap="handleSend" text="发送" type="success" size="mini"></up-button>
        </template>
      </up-input>
    </view>
  </view>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import useCloudbase from '@/utils/useCloudbase';
import MessageCard from '@/components/MessageCard.vue';

const messageList = ref(Array.from({ length: 99 }).map((v, index) => index));

const userAvatar = ref('');
const userInPut = ref('');
const robotAvatar = ref('/static/img/avatar-robot.jpg');

const handleInput = (v) => {
  console.log(v);
}

const handleSend = (v) => {
  console.log(v);
}

useCloudbase({
  msg: "你好"
}, "aiserver").then(res => {
  console.log(res)
})

</script>
<style lang="scss">
@import './robot.scss';
</style>
