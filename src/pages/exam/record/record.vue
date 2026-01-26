<template>
    <view class="content">
        <view class="record-list">
            <view 
                v-for="item in examRecords" 
                :key="item.id" 
                class="record-item"
            >
                <view class="record-info">
                    <text class="record-name">{{ item.examName }}</text>
                    <text class="record-time">{{ formatTime(item.time) }}</text>
                </view>
                <view class="record-action" @click="handleView(item)">
                    <view class="arrow-icon"></view>
                </view>
            </view>
            
            <view v-if="examRecords.length === 0" class="empty-state">
                <text class="empty-text">暂无考试记录</text>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { getExamRecords } from '@/service/exam';
import type { ExamRecordItem } from '@/service/exam';

import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import dayjs from 'dayjs';

const examRecords = ref<ExamRecordItem[]>([]);

const formatTime = (timestamp: number): string => {
    return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
};

const handleView = (item: ExamRecordItem) => {
   console.log('item.examDetail', item.examDetail[0]);
};

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