module.exports = {
  chainWebpack: config => {
    config
      .plugin('define')
      .tap(args => {
        args[0]['process.env'].VUE_APP_SOME_KEY = 123
        return args
      })
  }
}