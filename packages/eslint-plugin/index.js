const path = require('path')
const requireAll = require('require-all')

exports.rules = requireAll({
  dirname: path.resolve(__dirname, 'rules')
})

exports.configs = requireAll({
  dirname: path.resolve(__dirname, 'configs')
})

exports.processors = {
  '.json': {
    preProcess(text) {
      return [`module.exports = ${text}`]
    }
  }
}


// // for ESM
// export default plugin;

// // // OR for CommonJS
// // module.exports = plugin;