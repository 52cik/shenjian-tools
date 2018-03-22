import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

import { version } from './package.json';

const banner = `
/*!
 * shenjian tools v${version}
 * (c) ${new Date().getFullYear()} 楼教主 <fe.52cik@gmail.com> (http://www.52cik.com/)
 * Released under the MIT License.
 */
`.trim();

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    name: 'tools',
  },
  plugins: [
    babel(),
    uglify({ output: { preamble: banner } }),
    {
      name: 'replace',
      transformBundle(code) {
        return code
          .replace('var tools=', '(')
          .replace('}({});', '})({});');
      },
    },
  ],
};
