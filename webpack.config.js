module.exports = {

  entry: "./source/app.jsx",

  output: {
    path:  __dirname + '/public',
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader',
      query: { presets: ["react", "es2015"] }
      }
    ]
  }

};