const uniIdCommon = require('uni-id-common')
const uniCaptcha = require('uni-captcha')
const {
  checkClientInfo,
  getType
} = require('./common/utils')
const ConfigUtils = require('./lib/utils/config')
const {
  isUniIdError
} = require('./common/error')
const middleware = require('./middleware/index')

const {
  registerAdmin,
  registerUser
} = require('./module/register/index')
const {
  addUser
} = require('./module/admin/index')
const {
  login,
  loginBySms,
  loginByUniverify,
  loginByWeixin,
  loginByAlipay,
  loginByQQ,
  loginByApple
} = require('./module/login/index')
const {
  logout
} = require('./module/logout/index')
const {
  bindMobileBySms,
  bindMobileByUniverify,
  bindMobileByMpWeixin,
  bindAlipay,
  bindApple,
  bindQQ,
  bindWeixin
} = require('./module/relate/index')
const {
  updatePwd,
  resetPwdBySms,
  closeAccount,
  getAccountInfo
} = require('./module/account/index')
const {
  createCaptcha,
  refreshCaptcha,
  sendSmsCode
} = require('./module/verify/index')
const {
  refreshToken,
  setPushCid
} = require('./module/utils/index')
const {
  getInvitedUser,
  acceptInvite
} = require('./module/fission')
const {
  authorizeAppLogin,
  removeAuthorizedApp,
  setAuthorizedApp
} = require('./module/multi-end')
const {
  getSupportedLoginType
} = require('./module/dev/index')

module.exports = {
  async _before () {
    const clientInfo = this.getClientInfo()
    // 检查clientInfo，无appId和platform时本云对象无法正常运行
    checkClientInfo(clientInfo)
    let clientPlatform = clientInfo.platform
    switch (clientPlatform) {
      case 'app':
      case 'app-plus':
        clientPlatform = 'app'
        break
      case 'web':
      case 'h5':
        clientPlatform = 'h5'
        break
      default:
        break
    }

    this.clientPlatform = clientPlatform

    // 挂载uni-id实例到this上，方便后续调用
    this.uniIdCommon = uniIdCommon.createInstance({
      clientInfo
    })

    // 包含uni-id配置合并等功能的工具集
    this.config = new ConfigUtils({
      appId: clientInfo.appId,
      platform: clientPlatform
    }).getPlatformConfig()

    // 挂载uni-captcha到this上，方便后续调用
    this.uniCaptcha = uniCaptcha

    // 挂载中间件
    this.middleware = {}
    for (const mwName in middleware) {
      this.middleware[mwName] = middleware[mwName].bind(this)
    }

    // 国际化
    const i18n = uniCloud.initI18n({
      locale: clientInfo.locale,
      fallbackLocale: 'zh-Hans',
      messages: require('./lang/index')
    })
    this.t = i18n.t.bind(i18n)

    this.response = {}

    // 通用权限校验模块
    await this.middleware.accessControl()
  },
  _after (error, result) {
    if (error) {
      // 处理中间件内抛出的标准响应对象
      if (error.errCode && getType(error) === 'object') {
        const errCode = error.errCode
        if (!isUniIdError(errCode)) {
          return error
        }
        return {
          errCode,
          errMsg: error.errMsg || this.t(errCode, error.errMsgValue)
        }
      }
      throw error
    }
    return Object.assign(this.response, result)
  },
  /**
   * 注册管理员
   * @tutorial https://dcloud.io
   * @param {Object} params
   * @param {String} params.username   用户名
   * @param {String} params.password   密码
   * @param {String} params.nickname   昵称
   * @returns
   */
  registerAdmin,
  addUser,
  authorizeAppLogin,
  removeAuthorizedApp,
  setAuthorizedApp,
  registerUser,
  login,
  loginBySms,
  loginByUniverify,
  loginByWeixin,
  loginByAlipay,
  loginByQQ,
  loginByApple,
  logout,
  bindMobileBySms,
  bindMobileByUniverify,
  bindMobileByMpWeixin,
  bindWeixin,
  bindQQ,
  bindAlipay,
  bindApple,
  updatePwd,
  resetPwdBySms,
  closeAccount,
  getAccountInfo,
  createCaptcha,
  refreshCaptcha,
  sendSmsCode,
  refreshToken,
  acceptInvite,
  getInvitedUser,
  setPushCid,
  getSupportedLoginType
}
