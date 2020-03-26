const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  env: {
    BASE_URL: 'http://localhost:3000',
  },
  webpack: function(config) {
    (config.node = {
      fs: 'empty'
    }),
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000000,
            name: '[name].[ext]'
          }
        }
      });
    return config;
  }
});
