import { ConfigEnv, defineConfig, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }: ConfigEnv): UserConfig => {
  // const c = loadEnv(mode, resolve(__dirname));
  // console.log("c :>> ", c);
  const viteConfig: UserConfig = {
    plugins: [vue()],
  };

  return viteConfig;
});
