module.exports = {
  entry: './src/index.ts',
  context: __dirname,
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          // transpileOnly will check typescript checks
          // transpileOnly: true,
        },
      },
    ],
  },
}
