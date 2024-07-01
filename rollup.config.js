import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import { babel } from '@rollup/plugin-babel';
// import typescript from '@rollup/plugin-typescript';
// import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.cjs.js',
    format: 'iife', // amd es iife umd cjs
    name: 'bundleName', // 当 format 为 iife 和 UMD 是，必须提供变量名
    globals: {
      lodash: '_',
      jquery: '$',
    },
  },
  external: ['lodash', 'jquery'],
  plugins: [
    // babel({
    //   babelHelpers: 'bundled',
    //   exclude: 'node_modules/**',
    // }),
    nodeResolve(), // 作用是可以加载 node_modules 里有的模块
    commonjs(), // 可以支持 commonjs 语法
    // typescript(),
    // terser(),
    postcss(),
    serve({
      open: false,
      port: '8080',
      contentBase: './dist',
    }),
  ],
};
