<template>
    <view class="content">
        <swiper class="swiper-wrapper" @change="change" @click="click">
            <swiper-item class="swiper-item" v-for="(item, index) in list1" :key="index">
                <view class="item-wrap">
                    <view class="item-title">
                        <text>第{{ index + 1 }}/{{ list1.length }}题：{{ item.name }}</text>
                        <image :src="iconUrl[0]" class="right-icon" @click="handleIconClick(item, index)" />
                    </view>
                    <view class="item-content">
                        <u-parse :content="codeRender(item.basicContent)"></u-parse>
                    </view>
                    <view class="item-input">
                        <u-input placeholder="请输入"></u-input>
                    </view>
                </view>
            </swiper-item>
        </swiper>
        <u-modal :show="visible" title="当前答题情况" :show-confirm-button="false" :close-on-click-overlay="true" @close="handleClose">
            <view class="modal-content" style="text-align: left !important;">
                <view class="question-status-container" style="justify-content: flex-start !important;">
                    <view 
                        v-for="(item, index) in list1" 
                        :key="index" 
                        class="question-circle"
                    >
                        {{ index + 1 }}
                    </view>
                </view>
            </view>
        </u-modal>
    </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue'
import useCloudFiles from '@/utils/useCloudFiles';
const iconUrl = useCloudFiles(['/static/img/icon-2.avif'])
const id = ref('');
const visible = ref(false);

const list1 = ref([
    {
        name: '变量-1',
        id: 'week1-1',
        basicContent: `console.log(fruit);\r\nvar fruit = 'apple';`
    },
    {
        name: '测试项2',
        id: 'week1-2',
        basicContent: `console.log(animal);
let animal = 'cat';`
    }
])

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

// 处理右侧图标点击事件
const handleIconClick = (item: any, index: number) => {
    console.log('点击了图标:', item, index);
    visible.value = true;
    // 可以在这里添加具体的业务逻辑，比如查看解析、提示信息等
}

onLoad((options) => {
    console.log(options)
    id.value = options?.id;
})
</script>

<style lang="scss">
@import './examination.scss'
</style>