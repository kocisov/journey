import * as cp from 'child_process'

export default function(projectName: string, commands: string[]) {
  const cmd = `
    mkdir ${projectName}
    cd ${projectName}
    git init .
    npm init
    ${commands.join('\n')}
    atom .
  `

  cp.execSync(cmd, {
    stdio: [0, 1, 2],
  })
}
