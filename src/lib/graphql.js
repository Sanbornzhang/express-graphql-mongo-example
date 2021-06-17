module.exports = {
  extension: ctx => {
    return {
      runtime: Date.now() - ctx.startTime,
    }
  }
}
