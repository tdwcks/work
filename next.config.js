module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}

// const withFonts = require('next-fonts');
//
// module.exports = withFonts({
//   webpack(config, options) {
//     return config;
//   }
// });
