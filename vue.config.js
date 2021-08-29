module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/invoice-generator/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
