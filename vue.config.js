module.exports = {
  publicPath: '/',
  devServer: {
    // setting host should not be necessary
    // host: '0.0.0.0:8080'7
    proxy: 'http://0.0.0.0:3000',
    host: '0.0.0.0',
    port:3000,
    public: '0.0.0.0:3000',
    disableHostCheck: true,
  },
}