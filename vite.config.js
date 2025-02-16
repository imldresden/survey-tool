import { defineConfig /*, splitVendorChunkPlugin*/ } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [svelte(), viteSingleFile() /*, splitVendorChunkPlugin()*/],
});
