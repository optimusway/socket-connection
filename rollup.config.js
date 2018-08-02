import typescript from 'rollup-plugin-typescript';
import {uglify} from 'rollup-plugin-uglify';

export default {
  entry: './src/index.ts',

  output: {
    file: 'dist/bundle/socket-connection.js',
    format: 'umd',
    name: 'socket-connection',
    sourcemap: true
  },

  plugins: [
    typescript({
      importHelpers: true,
        typescript: require('typescript')
    }),
    uglify()
  ]
}