'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const util = require('util')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api/**': {
        target: 'https://localhost:8443',
        // target:'https://www.etwar.io',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
        cookieDomainRewrite:{
          '*':'localhost' // 把相应的 cookie 域都设置成 localhost，或者指定的域名
        },
        onProxyRes(proxyRes, req, res) {
          // console.log('headers:' + util.inspect(proxyRes.headers, false, null));

          if (proxyRes.headers['set-cookie']) {
            var newCookie = proxyRes.headers['set-cookie']
              .map(function (cookie) {
                // 去除https通讯标记
                return cookie.replace('Secure', '');
              });
          }
          // console.log('cookie:' + newCookie);
          proxyRes.headers['Set-Cookie'] = newCookie;// add new header to response
        }
      },

    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8081, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../resources/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../resources'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'png', 'jpg', 'html', 'webp', 'svg'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
