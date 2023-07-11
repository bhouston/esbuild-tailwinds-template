import * as esbuild from "esbuild";
import stylePlugin from "esbuild-style-plugin";

esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  sourcemap: true,
  target: ["es2020"],
  outfile: "public/index.js",
  plugins: [stylePlugin({ postcssConfigFile: true })],
});
