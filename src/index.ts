import { execSync } from 'child_process'

export default function(
  projectName: string = 'default',
  commands: string[] = [],
) {
  const cmd = `
    mkdir ${projectName}
    cd ${projectName}
    npm init
    ${commands.join('\n')}
    atom .
  `

  execSync(cmd, {
    stdio: [0, 1, 2],
  })
}
