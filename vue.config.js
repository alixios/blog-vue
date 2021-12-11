module.exports = {
  //配置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        // @ = 'src'
        'assets': '@/assets',
        'components': '@/components',
        'api': '@/api',
        'store': '@/store'
      }
    }
  },
  //忽略ESlint代码规范
  lintOnSave: false,
  devServer: {
    overlay: {
      warning: false,
      errors: false
    }
  }
}
