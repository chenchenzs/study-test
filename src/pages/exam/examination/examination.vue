<template>
    <view class="content">
        <view class="swiper-container">
            <swiper class="swiper-wrapper" @change="change" @click="click">
                <swiper-item class="swiper-item" v-for="(item, index) in list1" :key="index">
                    <view class="item-wrap">
                        <view class="item-title">
                            <text>第{{ index + 1 }}题：{{ item.name }}</text>
                            <image :src="iconUrl[0]" class="right-icon" @click="handleIconClick(item, index)" />
                        </view>
                        <view class="item-content">
                            <u-parse :content="`<div>${item.basicContent}</div>`"></u-parse>
                        </view>
                        <view class="item-input">
                            <u-input placeholder="请输入"></u-input>
                        </view>
                    </view>
                </swiper-item>
            </swiper>
        </view>
    </view>
</template>

<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue'
import useCloudFiles from '@/utils/useCloudFiles';
const iconUrl = useCloudFiles(['/static/img/icon-1.png'])

const id = ref('')
const list1 = ref([
    {
        name: '测试项1',
        id: 'week1-1',
        basicContent: `<br>
        console.log(fruit);<br>
        var fruit = 'apple';`
    },
    {
        name: '测试项2',
        id: 'week1-2',
        basicContent: ''
    }
])
const basicContent = ref('')

const change = (e: any) => {
    console.log(e)
}

const click = (e: any) => {
    console.log(e)
}

// 处理右侧图标点击事件
const handleIconClick = (item: any, index: number) => {
    console.log('点击了图标:', item, index);
    // 可以在这里添加具体的业务逻辑，比如查看解析、提示信息等
    uni.showToast({
        title: `点击了第${index + 1}题的图标`,
        icon: 'none'
    });
}

onLoad((options) => {
    console.log(options)
    id.value = options?.id;
})
</script>

<style lang="scss">
@import './examination.scss'
</style>