const inquirer = require('inquirer')

export async function askCLIConfirmation (message) {
  const answer = await inquirer.prompt([
    {
      name: 'providedAnswer',
      type: 'confirm',
      message,
      default: true
    }
  ])
  return answer.providedAnswer.toString()
}

export async function askCLIOptions (message, options) {
  // E.g. expect options as { name: api.name, value: api.id, checked (opt): [bool] }
  const answer = await inquirer.prompt([
    {
      name: 'providedOption',
      message,
      type: 'checkbox',
      choices: options
    }
  ])
  return answer.providedOption
}

export const getCredentialsFromCLI = async () => {
  const question = [
    {
      name: 'username',
      message: 'Username',
      type: 'input'
    },
    {
      name: 'password',
      message: 'Password',
      type: 'password'
    }
  ]
  return await inquirer.prompt(question)
}
