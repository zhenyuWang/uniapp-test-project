const { toMatchImageSnapshot } = require('jest-image-snapshot')
const hbuilderx_version = process.env.HX_Version
const uniTestPlatformInfo = process.env.uniTestPlatformInfo ? process.env.uniTestPlatformInfo.replace(/\s/g,'_') : ''
console.log('hbuilderx_version',hbuilderx_version)
console.log('uniTestPlatformInfo',uniTestPlatformInfo)
expect.extend({ toMatchImageSnapshot })
