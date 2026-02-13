import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    uni(),
    copy({
      targets: [
        {
          src: ["cloudfunctions/agent-ccrobot-1grve963ce7548e6/*", "!cloudfunctions/agent-ccrobot-1grve963ce7548e6/node_modules"],
          dest: "dist/dev/mp-weixin/cloudfunctions/agent-ccrobot-1grve963ce7548e6"
        },
        {
          src: ["cloudfunctions/aiserver/*", "!cloudfunctions/aiserver/node_modules"],
          dest: "dist/dev/mp-weixin/cloudfunctions/aiserver"
        }
      ],
      hook: "buildEnd",
      verbose: true
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  esbuild: {
    target: "es2015",
    supported: {
      "nullish-coalescing": false
    }
  }
});
