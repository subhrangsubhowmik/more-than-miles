import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Plain React + Vite. Builds static files into /build so Azure SWA can host them.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true,
  },
});
