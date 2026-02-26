<template>
  <view class="content">

    <view class="messageList">
      <scroll-view class="scroll-list" scroll-y>
        <view v-for="(msg, index) in messageList" :key="index" :id="'msg-' + index" class="message-item">
          <MessageCard :type="msg.type" :message="String(msg.message)" :time="msg.time" :isPast="msg.isPast" />
        </view>
      </scroll-view>
    </view>
    <view class="inputArea">
      <up-input placeholder="请输入内容" shape="circle" v-model="userInPut">
        <template #suffix>
          <up-button :disabled="loading" @tap="handleSend" text="发送" type="success" shape="circle"></up-button>
        </template>
      </up-input>
    </view>
  </view>
</template>


<script setup lang="ts">
import { nextTick, ref } from 'vue'
import useCloudbase from '@/utils/useCloudbase';
import MessageCard from '@/components/MessageCard.vue';

const messageList = ref<{ type: 'user' | 'robot'; message: string; time: string; isPast?: boolean }[]>([
  {
    type: 'user',
    message: 'hello~',
    time: new Date().toLocaleTimeString()
  },
  {
    type: 'robot',
    message: '你好，我是robot',
    isPast: true,
    time: new Date().toLocaleTimeString()
  },
]);

const userInPut = ref('');
const loading = ref(false);

const handleInput = (v) => {
  console.log(v);
}

const handleSend = (v) => {
  console.log('userInPut', userInPut.value);
  messageList.value.push({
    type: 'user',
    message: userInPut.value,
    time: new Date().toLocaleTimeString()
  });
  loading.value = true;
  messageList.value.push({
    type: 'robot',
    message: '正在思考中...',
    time: new Date().toLocaleTimeString()
  });
  loading.value = true;
  useCloudbase({
    userInput: userInPut.value
  }, "aiserver").then(res => {
    console.log('res', res);

    loading.value = false;
    messageList.value.pop();
    nextTick(() => {
      messageList.value.push({
        type: 'robot',
        message: res?.result?.content?.kwargs?.content || '',
        time: new Date().toLocaleTimeString()
      });
    })

  })
  userInPut.value = '';

}

</script>
<style lang="scss">
@import './robot.scss';
</style>
