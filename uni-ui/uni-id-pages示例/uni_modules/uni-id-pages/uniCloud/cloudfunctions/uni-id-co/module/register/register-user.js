const {
  postRegister,
  preRegisterWithPassword
} = require('../../lib/utils/register')
const {
  verifyCaptcha
} = require('../../lib/utils/captcha')

/**
 * 注册普通用户
 * @param {Object} params
 * @param {String} params.username    用户名
 * @param {String} params.password    密码
 * @param {String} params.captcha     图形验证码
 * @param {String} params.nickname    昵称
 * @param {String} params.inviteCode  邀请码
 * @returns
 */
module.exports = async function (params = {}) {
  const schema = {
    username: 'username',
    password: 'password',
    captcha: 'string',
    nickname: {
      required: false,
      type: 'nickname'
    },
    inviteCode: {
      required: false,
      type: 'string'
    }
  }
  this.middleware.validate(params, schema)
  const {
    username,
    password,
    nickname,
    captcha,
    inviteCode
  } = params

  await verifyCaptcha.call(this, {
    captcha,
    scene: 'register'
  })

  const {
    user,
    extraData
  } = await preRegisterWithPassword.call(this, {
    user: {
      username
    },
    password
  })
  return postRegister.call(this, {
    user,
    extraData: {
      ...extraData,
      nickname
    },
    inviteCode
  })
}
