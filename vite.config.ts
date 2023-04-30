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
          name: "React-BubblyTip",
          formats: ["cjs", "es"],
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
        cssCodeSplit: false, // 모든 CSS를 번들에 포함시킵니다.
      },
    };
  }
  // 개발 환경 설정 등이 필요한 경우 추가
  return {
    plugins: [react()],
  };
});
