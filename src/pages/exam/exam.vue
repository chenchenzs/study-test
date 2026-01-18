<template>
  <view class="content">
    <u-collapse>
      <u-collapse-item title="第一周" name="week1">
        <view class="week-item" v-for="(item, index) in indexList" :key="item.id" :title="item.title"
          @click="() => handleItem(item)">
          {{ index + 1 + '. ' + item.name }}
        </view>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>

<script setup lang="ts">
import { onLoad, onReady, onShow } from '@dcloudio/uni-app';
import { ref } from 'vue'
const title = ref('javascript小测');
// 直接在setup中初始化数据，不依赖生命周期
const indexList = ref<any[]>();

const handleItem = (item: any) => {
  console.log(item)
  uni.navigateTo({
    url: '/pages/exam/examination/examination?id=' + item.id
  })
}



onLoad(() => {

  indexList.value = [
    { name: '变量、数据类型', id: 'week1-1' },
    { name: '变量的解构赋值', id: 'week1-2' },
    { name: '变量的解构赋值', id: 'week1-3' },
  ];

});
</script>

<style lang="scss">
@import './exam.scss';
</style>