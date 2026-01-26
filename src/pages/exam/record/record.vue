<template>
    <view class="content">
        <text>hello</text>
    </view>
</template>

<script setup lang="ts">
import { getExamRecords } from '@/service/exam';
import type { ExamRecordItem } from '@/service/exam';

import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';

const examRecords = ref<ExamRecordItem[]>([]);


onLoad(() => {
    getExamRecords().then((res: any) => {
        if(res?.data?.length) {
            console.log('res', res);
            examRecords.value = res.data;
        }
    })
})

</script>

<style lang="scss">
@import './record.scss';
</style>