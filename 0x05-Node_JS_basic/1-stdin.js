const readline = require('readline');

function inputFx() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Welcome to Holberton School, what is your name?\n', (userInput) => {
    console.log(`Your name is: ${userInput}`);
    console.log('This important software is now closing');
    rl.close();
  });
}

inputFx();
