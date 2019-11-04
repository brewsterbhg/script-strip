const fs = require("fs")
const path = require("path")
const get = require("lodash.get")

const getPackageScripts = async () => {
  try {
    const pkg = await checkPath("package.json")
    return get(pkg, "scripts")
  } catch (error) {
    console.error(error)
  }
}

const checkPath = filePath => {
  const sourcePath = path.resolve(process.cwd(), filePath)
  const exists = fs.existsSync(sourcePath)
  if (exists) {
    return require(sourcePath)
  }
  throw new Error("No valid package.json found!")
}

module.exports = {
  getPackageScripts,
}
