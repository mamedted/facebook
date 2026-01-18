import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    mkcert(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true, // 👈 enable PWA in dev mode
      },
      manifest: {
        name: "FACEBOOK_REACT",
        short_name: "FB_REACT",
        description: "My Vite React Progressive Web App",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icon1.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon2.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icon2.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  server: {
    https: true,
  },
});
