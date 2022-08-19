const {
  deviceCollection
} = require('../../common/constants')
const {
  ERROR
} = require('../../common/error')

/**
 * 更新device表的push_clien_id
 * @param {object} params
 * @param {string} params.pushClientId  客户端pushClientId
 * @returns
 */
module.exports = async function (params = {}) {
  const schema = {
    pushClientId: 'string'
  }
  this.middleware.validate(params, schema)
  const {
    deviceId
  } = this.getClientInfo()
  const {
    uid,
    exp
  } = this.authInfo
  const { pushClientId } = params
  const tokenExpired = exp * 1000
  const getDeviceRes = await deviceCollection.where({
    device_id: deviceId
  }).get()
  console.log(getDeviceRes)
  if (getDeviceRes.data.length > 1) {
    return {
      errCode: ERROR.SYSTEM_ERROR
    }
  }
  const deviceRecord = getDeviceRes.data[0]
  if (!deviceRecord) {
    await deviceCollection.add({
      user_id: uid,
      device_id: deviceId,
      token_expired: tokenExpired,
      unipush_clientid: pushClientId
    })
    return {
      errCode: 0
    }
  }
  // 同一用户允许更新token_expired，不同用户在token_expired小于Date.now()时允许更新。搭配逻辑：用户退出登录时将token_expired置0
  if (
    deviceRecord.user_id === uid ||
    (deviceRecord.token_expired < Date.now())
  ) {
    await deviceCollection.where({
      device_id: deviceId
    }).update({
      user_id: uid,
      token_expired: tokenExpired,
      unipush_clientid: pushClientId
    })
    return {
      errCode: 0
    }
  }

  return {
    errCode: ERROR.SYSTEM_ERROR
  }
}
