const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // ...existing code...
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  // ...existing code...
};
