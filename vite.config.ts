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
          src: "cloudfunctions",
          dest: "dist/dev/mp-weixin"
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
});
