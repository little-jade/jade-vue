import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  plugins: [
    typescript()
  ],
  output: [
    {
      file: "dist/vue.global.js",
      name: "Vue",
      format: "iife",
      sourcemap: true,
    },
  ]
}