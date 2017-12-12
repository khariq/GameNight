'use strict';

const path = require('path');
process.traceDeprecation = true;

module.exports = {
  entry: './app/origin.tsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {    
    loaders: [
      {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }, {
        test: /\.(scss|sass)$/,
        loader: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS
        ]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    //"react": "React",
    //"react-dom": "ReactDOM"
  }
};
