const readline = require('readline');

function inputFx() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Welcome to Holberton School, what is your name?\n', (userInput) => {
    rl.output.write(`Your name is: ${userInput}\r`);
    rl.output.write('This important software is now closing\n');
    rl.close();
  });
}

inputFx();
