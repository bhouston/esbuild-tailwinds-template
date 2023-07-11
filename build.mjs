import * as esbuild from "esbuild";
import postCssPlugin from "esbuild-plugin-postcss2";
import autoprefixer from "autoprefixer";

await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  sourcemap: true,
  target: ["es2020"],
  outfile: "public/index.js",
  plugins: [
    postCssPlugin.default({
      plugins: [autoprefixer],
    }),
  ],
});
