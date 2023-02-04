import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		origin: "http://localhost:3000",
		port: 3000,
	},

	plugins: [vue()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
		},
	},
});
