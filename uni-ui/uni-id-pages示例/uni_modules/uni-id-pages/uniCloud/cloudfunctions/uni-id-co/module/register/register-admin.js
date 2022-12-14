const {
  userCollection
} = require('../../common/constants')
const {
  ERROR
} = require('../../common/error')
const {
  preRegisterWithPassword,
  postRegister
} = require('../../lib/utils/register')

/**
 * 注册管理员
 * @param {Object} params
 * @param {String} params.username   用户名
 * @param {String} params.password   密码
 * @param {String} params.nickname   昵称
 * @returns
 */
module.exports = async function (params = {}) {
  const schema = {
    username: 'username',
    password: 'password',
    nickname: {
      type: 'nickname',
      required: false
    }
  }
  this.middleware.validate(params, schema)
  const {
    username,
    password,
    nickname
  } = params
  const getAdminRes = await userCollection.where({
    role: 'admin'
  }).limit(1).get()
  if (getAdminRes.data.length > 0) {
    return {
      errCode: ERROR.ADMIN_EXISTS
    }
  }
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
      nickname,
      role: ['admin']
    }
  })
}
