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
                        <button v-if="examList.every((item) => item.answer)"  @click="handleSubmit">提交</button>
                    </view>
                </view>
            </swiper-item>
        </swiper>
        <u-modal :show="visible" title="当前答题情况" :show-confirm-button="false" :close-on-click-overlay="true"
            @close="handleClose">
            <view class="modal-content" style="text-align: left !important;">
                <view class="question-status-container" style="justify-content: flex-start !important;">
                    <view v-for="(item, index) in examList" :key="index" class="question-circle" :class="{ 'completed': item.answer && item.answer.trim() }">
                        {{ index + 1 }}
                    </view>
                </view>
            </view>
        </u-modal>
    </view>
</template>

<script setup lang="ts">
import { onLoad, onUnload } from '@dcloudio/uni-app';
import { ref } from 'vue'
import useCloudFiles from '@/utils/useCloudFiles';
import { useExamStore } from '@/store/exam';
const examStore = useExamStore();
const { examList } = examStore;

const iconUrl = useCloudFiles(['/static/img/icon-2.avif'])
const visible = ref(false);

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
   console.log(examList,'提交');
}

// 处理右侧图标点击事件
const handleIconClick = (item: any, index: number) => {
    console.log('点击了图标:', item, index);
    console.log(examList);

    visible.value = true;
    // 可以在这里添加具体的业务逻辑，比如查看解析、提示信息等
}

onLoad((options) => {
    console.log(options)
})

onUnload(() => {
    examStore.resetExamList();
})

</script>

<style lang="scss">
@import './examination.scss'
</style>