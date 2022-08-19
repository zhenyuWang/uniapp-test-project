const {
  setUserStatus
} = require('../../lib/utils/update-user-info')
const {
  USER_STATUS
} = require('../../common/constants')

/**
 * 注销账户
 * @returns
 */
module.exports = async function () {
  const { uid } = this.authInfo
  return setUserStatus(uid, USER_STATUS.CLOSED)
}
