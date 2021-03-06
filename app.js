
require('colors');

const { showMenu, pause } = require('./helpers/messages');
const { inquirerMenu } = require('./helpers/inquirer');

console.clear();

const main = async () => {

  let opt = '';

  do {
    opt = await inquirerMenu();
    console.log(opt);
  } while (opt !== '0');
}

main();