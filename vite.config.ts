import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const strapiApiUrl = env.VITE_STRAPI_API_URL;

  if (!strapiApiUrl) {
    console.warn(
      "VITE_STRAPI_API_URL is not defined, using default: http://localhost:1337"
    );
  }

  return {
    base: "/",
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "https://precious-ducks-46d41ceaae.strapiapp.com/api/",
          changeOrigin: true,
          secure: false,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/shared/styles/_variables.scss" as *;
            @use "@/shared/styles/_mixins.scss" as *;
            @use "@/shared/styles/_fonts.scss" as *;
          `,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
