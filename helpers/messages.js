require('colors');
const showMenu = () => {

  return new Promise( resolve => {
  
  
  
    console.log('1. Add TO-DO');
    console.log('2. List all TO-DOs');
    console.log('3. List completed TO-DOs');
    console.log('4. List pending TO-DOs');
    console.log('5. Completed TO-DO(s)');
    console.log('6. Clear TO-DO');
    console.log('0. Exit \n');
  
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readLine.question('Select a option: ', (opt) => {
      readLine.close();
      resolve(opt);
    });

  });


}

const pause = () => {

  return new Promise( resolve => {
    const readLine = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readLine.question(`\nPress ${ 'ENTER'.blue } to continue\n`, (opt) => {
      readLine.close();
      resolve();
    });
  });
}

module.exports = {
  showMenu,
  pause,
};
