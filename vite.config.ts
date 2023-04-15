import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import type { UserConfig } from "vite";

export default defineConfig(({ command }): UserConfig => {
  if (command === "build") {
    return {
      plugins: [react()],
      build: {
        outDir: "lib",
        lib: {
          entry: "src/index.ts",
          name: "React-Bubblytip",
          formats: ["cjs"],
          fileName: "index",
        },
        minify: false,
        rollupOptions: {
          external: ["react", "react-dom"],
          output: {
            globals: {
              react: "React",
              "react-dom": "ReactDOM",
            },
          },
        },
      },
    };
  } else {
    // 개발 환경 설정 등이 필요한 경우 추가
    return {
      plugins: [react()],
    };
  }
});
