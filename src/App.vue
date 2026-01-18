<script setup>
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  if (typeof wx !== 'undefined') {
    // @ts-ignore
    wx.cloud.init({
      env: 'cloud1-7gxx5fsl43e22b23', // 您的微信云开发环境ID
      traceUser: true // 记录用户访问日志
    });
  }
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style lang="scss">
// 导入uview-plus的样式文件
@import "/node_modules/uview-plus/index.scss";
</style>