const path = require('path')
const fse = require('fs-extra')

const TEMPLATE_PATH = path.join(__dirname, 'template')
const templatePkgJson = require(path.join(TEMPLATE_PATH, 'package.json'))
const COMMANDS = {
  async generate (args) {
    const [ pkgsAmount ] = args
    let i = 1

    await Promise.all([
      fse.remove(path.join(TEMPLATE_PATH, 'node_modules')),
      fse.remove(path.join(TEMPLATE_PATH, 'yarn.lock')),
    ])

    while (i <= pkgsAmount) {
      await generatePackage(i++)
    }
  }
}

async function generatePackage (number) {
  const otherPkgs = await fse.readdir('.')
  const pkgName = `package-${number}`
  const pkgJson = {
    ...templatePkgJson,
    name: pkgName
  }

  await fse.copy(TEMPLATE_PATH, pkgName)
  for (const otherPkgName of otherPkgs) {
    if (Math.random() < 0.5) {
      pkgJson.dependencies = pkgJson.dependencies || {}
      pkgJson.dependencies[otherPkgName] = '^' + templatePkgJson.version
    }
  }

  await fse.writeFile(
    path.join(pkgName, 'package.json'),
    JSON.stringify(pkgJson, null, 2)
  )
}

module.exports = async function main (args) {
  const [ commandName ] = args

  if (COMMANDS[commandName]) {
    return COMMANDS[commandName](args.slice(1))
  }

  throw new Error(`command '${commandName}' not found`)
}
