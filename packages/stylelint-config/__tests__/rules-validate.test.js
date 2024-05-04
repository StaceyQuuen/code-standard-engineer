const stylelint = require('stylelint')
const path = require('path')
const assert = require('assert')
describe('test/rules-validate.test.js', () => {
  it('Validate default', async ()=> {
    const filePaths = [path.join(__dirname, './fixtures/index.css')]
    const result = await stylelint.lint({
      // index.js为自定义配置的规则
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false
    })

    if(result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || []
      filesResult.forEach(fileResult => {
        console.log(`===========> ${filePaths}`)
        console.log(fileResult.warnings)
      })

      assert.ok(filesResult.length !== 0)
    }
  })
})