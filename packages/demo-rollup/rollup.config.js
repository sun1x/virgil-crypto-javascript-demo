const path = require('path');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

module.exports = {
  input: path.join(__dirname, 'index.js'),
  output: {
    file: path.join(__dirname, 'bundle.js'),
    format: 'umd',
    name: 'RollupDemo',
  },
  plugins: [
    nodeResolve({
      module: true,
      browser: true,
    }),
    commonjs(),
  ],
};
