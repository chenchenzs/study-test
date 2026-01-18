// @ts-nocheck
import { ref, onBeforeMount } from 'vue';
import { defaultUrlHead } from '@/config'
// 从配置中获取云文件前缀

export default function useCloudFiles(urlList: string[]) {
    // 返回响应式数组，用于存储临时链接
    const tempUrls = ref<string[]>([]);
    
    // 加载云文件临时链接的函数
    const loadCloudFiles = () => {
        if (typeof wx === 'undefined') return;
        
        // 构建完整的云文件ID列表
        const cloudFileIds = urlList.map(url => defaultUrlHead + url);
        // console.log('请求的文件列表:', cloudFileIds);
        
        // 获取临时链接
        wx.cloud.getTempFileURL({
            fileList: cloudFileIds,
            success: res => {
                console.log('获取临时链接成功:', res);
                if (res.fileList && res.fileList.length > 0) {
                    // 更新响应式数组，触发页面重新渲染
                    tempUrls.value = res.fileList.map(item => item.tempFileURL || '');
                }
            },
            fail: err => {
                console.error('获取临时链接失败:', err);
                // 使用本地默认图片作为兜底
                tempUrls.value = [];
            }
        });
    };
    
    // 在组件挂载时自动加载
    onBeforeMount(() => {
        loadCloudFiles();
    });
    
    // 返回响应式数组
    return tempUrls;
}