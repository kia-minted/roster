module.exports = {
  entry: './app/App.js',
  output: {
    filename: 'public/bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {test: /\.jsx?$/, loader: 'babel-loader'}
    ]
  }
};
