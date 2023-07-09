import { defineConfig, loadEnv, UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: UserConfig) => {

  const env = loadEnv(mode ?? "development", process.cwd(), "");
  const basePath: string = env.BASE_PATH + "/";

  return {
    base: basePath,
    plugins: [react()],
    define: {
      "process.env": env,
    },
    resolve: {
      alias: [
        { find: "@", replacement: path.resolve(__dirname, "./src")},
        { find: /^~/, replacement: "" }
      ]
    }
  };
});
