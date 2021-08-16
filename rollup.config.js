import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";

const extensions = ['.js', '.ts'];
const plugins = [
  commonjs(),
  nodeResolve({ extensions }),
  babel({ extensions, include: ['./src/**/*'] }),
  terser(),
];

const config = {
  input: 'src/index.ts',
  output: [
    { dir: 'lib', name: 'satumSingleSpaMidware', format: 'umd' },
    { file: 'lib/index.es.js', format: 'es' },
  ],
  plugins,
};

const dtsConfig = {
  input: './src/index.ts',
  output: { file: './lib/index.d.ts', format: 'es' },
  plugins: [dts()]
}

export default [config, dtsConfig];