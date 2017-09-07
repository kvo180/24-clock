var path = require('path');
var SRC_DIR = path.join(__dirname, 'client/src');
var DIST_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/, // ? makes the preceding token optional. In this case, it will look for both .js and .jsx files
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

