import { exec } from 'child_process'

export default function(projectName: string, commands: string[]) {
  console.log(projectName, commands)

  const cmd = `
  mkdir ${projectName}
  cd ${projectName}
  ${commands.join('\n')}
  atom .
  `

  exec(cmd, (err, stdin, stdout) => {
    console.log(stdout)
  })
}
