// @ts-nocheck
import { createSSRApp } from "vue";
import App from "./App.vue";
import uView from "uview-plus";

export function createApp() {
  const app = createSSRApp(App);
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
