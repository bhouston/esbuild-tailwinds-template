import * as esbuild from "esbuild";
import stylePlugin from "esbuild-style-plugin";

/*
const bundle = await esbuild.build({
  entryPoints: ["src/index.css"],
  bundle: true,
  outfile: "public/index.css",
  plugins: [
   stylePlugin()
  ],
});
*/
esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  sourcemap: true,
  target: ["es2020"],
  outfile: "public/index.js",
  plugins: [stylePlugin({ postcssConfigFile: true })],
});
