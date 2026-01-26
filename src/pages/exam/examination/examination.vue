<template>
    <view class="content">
        <swiper class="swiper-wrapper" @change="change" @click="click">
            <swiper-item class="swiper-item" v-for="(item, index) in examList" :key="item.id">
                <view class="item-wrap">
                    <view class="item-title">
                        <text>第{{ index + 1 }}/{{ examList.length }}题：{{ item.title }}</text>
                        <image :src="iconUrl[0]" class="right-icon" @click="handleIconClick(item, index)" />
                    </view>
                    <view class="item-content">
                        <u-parse :content="codeRender(item.code)"></u-parse>
                    </view>
                    <view class="item-input">
                        <u-input v-model="item.answer" placeholder="请输入"></u-input>
                        <button v-if="examList.every((item) => item.answer)"
                            @click="handleSubmit">提交</button>
                    </view>
                </view>
            </swiper-item>
        </swiper>
        <u-modal :show="visible" title="当前答题情况" :show-confirm-button="false" :close-on-click-overlay="true"
            @close="handleClose">
            <view class="modal-content" style="text-align: left !important;">
                <view class="question-status-container" style="justify-content: flex-start !important;">
                    <view v-for="(item, index) in examList" :key="index" class="question-circle"
                        :class="{ 'completed': item.answer && item.answer.trim() }">
                        {{ index + 1 }}
                    </view>
                </view>
            </view>
        </u-modal>
        <!-- 提交确认模态框 -->
        <u-modal :show="submitVisible" :title="''" :show-confirm-button="true" :show-cancel-button="true"
            :close-on-click-overlay="true" @close="handleSubmitCancel" @cancel="handleSubmitCancel"
            @confirm="handleSubmitConfirm">
            <view style="padding: 30rpx 0; text-align: center;">
                <text style="font-size: 30rpx; color: #333; line-height: 1.6;">提交后无法修改，请确定是否要提交？</text>
            </view>
        </u-modal>
    </view>
</template>

<script setup lang="ts">
import { onLoad, onUnload } from '@dcloudio/uni-app';
import { ref } from 'vue'
import useCloudFiles from '@/utils/useCloudFiles';
import { useExamStore } from '@/store/exam';
import { addExamRecord } from '@/service/exam';
const examStore = useExamStore();
const { examList } = examStore;

const iconUrl = useCloudFiles(['/static/img/icon-2.avif'])
const visible = ref(false);
const loading = ref(false);
const submitVisible = ref(false);
const examInfo = ref<{ id: string, name: string } | null>(null);



const change = (e: any) => {
    console.log(e)
}

const click = (e: any) => {
    console.log(e)
}

const codeRender = (content: string) => {
    return `<div>
    <div>请输入下面代码的执行结果：</div>
    <pre class="code">${content}</pre>
    </div>`
}

const handleClose = () => {
    visible.value = false;
}

const handleSubmit = () => {
    submitVisible.value = true;
}

// 处理提交取消
const handleSubmitCancel = () => {
    submitVisible.value = false;
    loading.value = false;
}

// 处理提交确认
const handleSubmitConfirm = async () => {
    if(loading.value) return;
    loading.value = true;
    const examData = {
        examId: examInfo.value?.id || '',
        examName: examInfo.value?.name || '',
        examDetail: JSON.parse(JSON.stringify(examList)),
        time: +new Date(),
    }
    try {
        const res = await addExamRecord(examData);
        console.log('数据存储成功:', res);
        uni.showToast({
            title: '提交成功',
            icon: 'success'
        });
        submitVisible.value = false;
        setTimeout(() => {
            uni.navigateBack();
        }, 500);
    } catch (error) {
        console.error('数据存储失败:', error);
        uni.showToast({
            title: '提交失败，请重试',
            icon: 'none'
        });
    } finally {
        // 无论成功失败，都关闭加载状态
        loading.value = false;
    }
}

// 处理右侧图标点击事件
const handleIconClick = (item: any, index: number) => {
    console.log('点击了图标:', item, index);
    console.log(examList);
    visible.value = true;
    // 可以在这里添加具体的业务逻辑，比如查看解析、提示信息等
}

onLoad((options: any) => {
    console.log(options)
    const { id, name } = options;
    examInfo.value = { id, name }
})

onUnload(() => {
    examStore.resetExamList();
})

</script>

<style lang="scss">
@import './examination.scss'
</style>