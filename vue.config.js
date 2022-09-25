// can't get this to work ¯\_(ツ)_/¯
// get this error seems like vue is returning HTML not JSON
// https://support.stripe.com/questions/how-to-fix-syntaxerror-unexpected-token-in-json-at-position-0
module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
