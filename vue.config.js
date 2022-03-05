module.exports = {
  publicPath: '/',
  devServer: {
    // setting host should not be necessary
    // host: '0.0.0.0:8080'7
    proxy: 'http://108.61.99.202:3000/',
    host: '0.0.0.0',
    port:3000,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  },
}