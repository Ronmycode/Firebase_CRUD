import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  esbuild: {
    loader: "jsx", // Ensures Vite processes files with JSX syntax correctly
    include: /src\/.*\.jsx?$/, // Only target files in `src` with .js or .jsx
  },
});
