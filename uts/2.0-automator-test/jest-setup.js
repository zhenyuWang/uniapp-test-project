const {
  toMatchImageSnapshot
} = require('jest-image-snapshot')

const path = require('path');
const fs = require('fs')

const testCaseToSnapshotFilePath = process.env.testCaseToSnapshotFilePath || './testCaseToSnapshotFilePath.json'

if (!fs.existsSync(testCaseToSnapshotFilePath)) {
  fs.writeFileSync(testCaseToSnapshotFilePath, '{}')
}

function writeTestCaseToSnapshotFile(testCaseName, snapshotFilePath) {
  const data = JSON.parse(fs.readFileSync(testCaseToSnapshotFilePath))
  if (!data[testCaseName]) {
    data[testCaseName] = [snapshotFilePath]
  } else {
    data[testCaseName].push(snapshotFilePath)
  }
  fs.writeFileSync(testCaseToSnapshotFilePath, JSON.stringify(data, null, 2))
}

function toSaveSnapshot(received, {
  customSnapshotsDir,
  fileName
} = {}) {
  const {
    snapshotState: {
      _rootDir
    },
    testPath,
    currentTestName,
  } = this;
  const SNAPSHOTS_DIR = '__file_snapshots__'
  const snapshotDir = process.env.saveSnapshotDir || createSnapshotDir({
    customSnapshotsDir,
    testPath,
    SNAPSHOTS_DIR
  })
  const _fileName = createFileName({
    fileName,
    testPath,
    currentTestName
  })
  const filePath = path.join(snapshotDir, _fileName)
  let message = () => `${currentTestName} toSaveSnapshot success`
  let pass = true

  try {
    checkSnapshotDir(snapshotDir)
    fs.writeFileSync(filePath, received)
    writeTestCaseToSnapshotFile(testPath.replace(`${_rootDir}/`, ''), filePath)
  } catch (e) {
    console.log('toSaveSnapshot fail', e)
    message = () => e.message
    pass = false
  }

  return {
    message,
    pass
  }
}

function toSaveImageSnapshot(received, {
  customSnapshotsDir,
  customSnapshotIdentifier
} = {}) {
  const {
    snapshotState: {
      _rootDir
    },
    testPath,
    currentTestName,
  } = this;
  const SNAPSHOTS_DIR = '__image_snapshots__'
  const snapshotDir = process.env.saveImageSnapshotDir || createSnapshotDir({
    customSnapshotsDir,
    testPath,
    SNAPSHOTS_DIR
  })
  const _fileName = createFileName({
    fileName: customSnapshotIdentifier ? customSnapshotIdentifier() : '',
    testPath,
    currentTestName,
    fileType: 'png'
  })
  const filePath = path.join(snapshotDir, _fileName)
  let message = () => `${currentTestName} toSaveImageSnapshot success`
  let pass = true

  try {
    checkSnapshotDir(snapshotDir)
    fs.writeFileSync(filePath, Buffer.from(received, 'base64'))
    writeTestCaseToSnapshotFile(testPath.replace(`${_rootDir}/`, ''), filePath)
  } catch (e) {
    console.log('toSaveSnapshot fail', e)
    message = () => e.message
    pass = false
  }

  return {
    message,
    pass
  }
}

expect.extend({
  toMatchImageSnapshot,
  toSaveSnapshot,
  toSaveImageSnapshot,
})

function createSnapshotDir({
  customSnapshotsDir,
  testPath,
  SNAPSHOTS_DIR
}) {
  return customSnapshotsDir || path.join(path.dirname(testPath), SNAPSHOTS_DIR)
}

function createFileName({
  fileName,
  testPath,
  currentTestName,
  fileType
}) {
  return fileName || createSnapshotIdentifier({
    testPath,
    currentTestName,
    fileType
  })
}

function createSnapshotIdentifier({
  testPath,
  currentTestName,
  fileType = 'txt'
}) {
  const snapshotIdentifier = kebabCase(`${path.basename(testPath)}-${currentTestName}`)
  const counter = timesCalled.get(`${snapshotIdentifier}-${fileType}`) || 1
  timesCalled.set(`${snapshotIdentifier}-${fileType}`, counter + 1)
  return `${snapshotIdentifier}-${counter}.${fileType}`
}

function kebabCase(str) {
  return str
    .replaceAll(/([a-z])([A-Z])/g, '$1-$2')
    .replaceAll(/\s+/g, '-')
    .replaceAll(/_+/g, '-')
    .replaceAll(/\/+/g, '-')
    .replaceAll(/\.+/g, '-')
    .toLowerCase();
}

function checkSnapshotDir(snapshotDir) {
  if (!fs.existsSync(snapshotDir)) {
    fs.mkdirSync(snapshotDir, {
      recursive: true
    });
  }
}

const timesCalled = new Map()