/**
 * 刷新token
 */
module.exports = async function () {
  const {
    token,
    tokenExpired
  } = await this.uniIdCommon.refreshToken({
    token: this.getUniIdToken()
  })
  return {
    errCode: 0,
    newToken: {
      token,
      tokenExpired
    }
  }
}
