module.exports = {
  plugins: ['stacey'],
  // rules: {
  //   // 使用插件提供的规则
  //   'myplugin/rule-name': 'error'
  // },
  extends: [
    // 如果插件提供了预设配置，可以在这里引用
    'plugin:stacey/recommended'
  ]
};