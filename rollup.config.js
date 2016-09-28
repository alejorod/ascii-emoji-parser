import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/main.js',
  format: 'umd',
  dest: 'lib/ascii-emoji-parser.js',
  plugins: [ babel({
    babelrc: false,
    presets: [ 'es2015-rollup' ]
  }), uglify() ],
  moduleName: 'AsciiEmojiParser'
};
