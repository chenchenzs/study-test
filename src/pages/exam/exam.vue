<template>
  <view class="content">
    <u-collapse>
      <u-collapse-item v-for="(item) in studyWeekData" :key="item.id" :title="item.title">
        <view class="week-item" v-for="(content, index) in item.content" :key="content.id"  
          @click="() => handleItem(content)">
          {{ index + 1 + '. ' + content.name }}
        </view>
      </u-collapse-item>
    </u-collapse>
  </view>
</template>

<script setup lang="ts">
import studyWeekData from '@/config/studyWeekData';
import { useExamStore } from '@/store/exam';
import { getTestData } from '@/service/exam';
const examStore = useExamStore();

const handleItem = async (item: any) => {
  console.log(item);
  const res = await getTestData(item.type);
  if(res?.data?.length) {
   examStore.setExamList(res?.data)
  }else{
    uni.showToast({
      title: '暂无该类型考试',
      icon: 'none'
    })
    return 
  }

  uni.navigateTo({
    url: `/pages/exam/examination/examination?id=${item.type}&name=${item.name}`
  })
}

</script>

<style lang="scss">
@import './exam.scss';
</style>