import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    name: 'tools',
  },
  plugins: [babel(), uglify()],
};
