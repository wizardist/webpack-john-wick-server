class JohnWickServer {
  apply(compiler) {
    compiler.hooks.done.tap('john-wick-plugin', () => {
      console.log('I have served. I will be of service.')
    })
  }
}

module.exports = JohnWickServer
