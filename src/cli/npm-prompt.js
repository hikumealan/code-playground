// npm script that prompts the user for input then sends the input to another npm script

const { spawn } = require('child_process');

// Prompt the user for input
const input = prompt('Enter some text: ');

// Create a child process to run the other npm script
const child = spawn('npm', ['run', 'other-script', input]);

// Wait for the child process to exit
child.on('exit', (code) => {
  // Check the exit code
  if (code === 0) {
    console.log('The other npm script exited successfully.');
  } else {
    console.log('The other npm script exited with an error code.');
  }
});
