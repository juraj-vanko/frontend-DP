module.exports = {
  publicPath: '/',
  devServer: {
    // setting host should not be necessary
    // host: '0.0.0.0:8080'7
    
    host: 'localhost',
    port:3000,
    disableHostCheck: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  },
}