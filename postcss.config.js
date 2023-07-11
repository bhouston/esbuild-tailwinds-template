import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import tailwindcssNesting from "tailwindcss/nesting/index.js";
import postcss from "postcss-scss";

export default {
  parser: postcss,
  plugins: [postcssImport, tailwindcss, tailwindcssNesting, autoprefixer],
};
