const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you doing?',
    choices: ['opt1', 'opt2', 'opt3'],
  }
]

const inquirerMenu = async () => {
  console.clear();
  console.log('===================='.white);
  console.log('Select Option'.white);
  console.log('====================\n'.white);

  const opt = await inquirer.prompt(questions);
  return opt;
}

module.exports = {
  inquirerMenu,
}