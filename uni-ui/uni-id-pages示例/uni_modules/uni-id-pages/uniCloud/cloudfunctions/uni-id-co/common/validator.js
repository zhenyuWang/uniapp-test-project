const {
  isValidString,
  getType
} = require('./utils.js')
const {
  ERROR
} = require('./error')

const validator = Object.create(null)

validator.username = function (username) {
  const errCode = ERROR.INVALID_USERNAME
  if (!isValidString(username)) {
    return {
      errCode
    }
  }
  if (/^\d+$/.test(username)) {
    // 用户名不能为纯数字
    return {
      errCode
    }
  };
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    // 用户名仅能使用数字、字母、“_”及“-”
    return {
      errCode
    }
  }
}

validator.password = function (password) {
  const errCode = ERROR.INVALID_PASSWORD
  if (!isValidString(password)) {
    return {
      errCode
    }
  }
  if (password.length < 6) {
    // 密码长度不能小于6
    return {
      errCode
    }
  }
}

validator.mobile = function (mobile) {
  const errCode = ERROR.INVALID_MOBILE
  if (!isValidString(mobile)) {
    return {
      errCode
    }
  }
  if (!/^1\d{10}$/.test(mobile)) {
    return {
      errCode
    }
  }
}

validator.email = function (email) {
  const errCode = ERROR.INVALID_EMAIL
  if (!isValidString(email)) {
    return {
      errCode
    }
  }
  if (!/@/.test(email)) {
    return {
      errCode
    }
  }
}

validator.nickname = function (nickname) {
  const errCode = ERROR.INVALID_NICKNAME
  if (nickname.indexOf('@') !== -1) {
    // 昵称不允许含@
    return {
      errCode
    }
  };
  if (/^\d+$/.test(nickname)) {
    // 昵称不能为纯数字
    return {
      errCode
    }
  };
  if (nickname.length > 100) {
    // 昵称不可超过100字符
    return {
      errCode
    }
  }
}

validate['array<string>'] = function (arr) {
  if (getType(arr) !== 'array') {
    return {
      errCode: ERROR.INVALID_PARAM
    }
  }
  if (arr.some(item => !isValidString(item))) {
    return {
      errCode: ERROR.INVALID_PARAM
    }
  }
}

const baseType = ['string', 'boolean', 'number']

baseType.forEach((type) => {
  validator[type] = function (val) {
    if (getType(val) === type) {
      return
    }
    return {
      errCode: ERROR.INVALID_PARAM
    }
  }
})

function validate (value = {}, schema = {}) {
  for (const schemaKey in schema) {
    let schemaValue = schema[schemaKey]
    if (getType(schemaValue) === 'string') {
      schemaValue = {
        required: true,
        type: schemaValue
      }
    }
    const {
      required,
      type
    } = schemaValue
    if (!(schemaKey in value)) {
      if (required) {
        return {
          errCode: ERROR.PARAM_REQUIRED,
          errMsgValue: {
            param: schemaKey
          }
        }
      } else {
        continue
      }
    }
    const validateMethod = validator[type]
    if (!validateMethod) {
      throw new Error(`invalid schema type: ${type}`)
    }
    const validateRes = validateMethod(value[schemaKey])
    if (validateRes) {
      return validateRes
    }
  }
}

module.exports = {
  validate,
  validator
}
