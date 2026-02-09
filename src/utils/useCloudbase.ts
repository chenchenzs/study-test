import cloudbaseSDK from "@cloudbase/js-sdk";
import adapter from "@cloudbase/adapter-uni-app";
import { PUBLIC_KEY } from "@/config";

// 传入配置选项
const options = {
  uni: uni // 传入 uni 对象，用于图形验证码功能
};

cloudbaseSDK.useAdapters(adapter, options);

const cloudbase = cloudbaseSDK.init({
  // 环境 ID
  env: "cloud1-7gxx5fsl43e22b23",
  // 地域
  region: "ap-shanghai",
  accessKey: PUBLIC_KEY,

});


export default async function useCloudbase(data: any,name="agent-ccrobot-1grve963ce7548e6") {

    const res = await cloudbase.callFunction({
        name,
        data
    });
    console.log('resssss',res);
    
    return res
};