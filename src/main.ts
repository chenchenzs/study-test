// @ts-nocheck
import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import uView from "uview-plus";

export function createApp() {
  const app = createSSRApp(App);
  
  // 配置Pinia
  const pinia = createPinia();
  app.use(pinia);
  
  app.use(uView);
  if (typeof wx !== 'undefined') {
    wx.cloud.init({
      env: 'cloud1-7gxx5fsl43e22b23',
      traceUser: true
    });
  }
  return {
    app,
  };
}
