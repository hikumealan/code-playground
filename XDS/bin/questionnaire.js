// const debounce = (callback, wait) => {
//     let timeoutId = null;
//     return (...args) => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         callback.apply(null, args);
//       }, wait);
//     };
//   }
//   const readline = require('readline');
// const values = ['lorem ipsum', 'dolor sit amet'];
// const rl = readline.createInterface(process.stdin);
// const showResults = debounce(() => {
//   console.log(
//     '\n',
//     values.filter((val) => val.startsWith(rl.line)).join(' ')
//   );
// }, 30);
// process.stdin.on('keypress', (c, k) => {
//   showResults();
// });

const questions = [
    {
      type: "input",
      name: "username",
      value: "",
      label: "Username: ",
      placeholder: "",
      options: [
          {label: "", value: ""}
      ],
      validation: () => {
          return true;
      }
    },
    {
      type: "password",
      name: "password",
      value: "",
      label: "Password: ",
      placeholder: "",
      options: [
          {label: "", value: ""}
      ],
      validation: () => {
          return true;
      }
    },
    {
      type: "checkbox",
      name: "remember",
      value: "",
      label: "Remember Me: ",
      placeholder: "",
      options: [
          {label: "", value: ""}
      ],
      validation: () => {
          return true;
      }
    },
    {
      type: "radio",
      name: "remember",
      value: "",
      label: "Remember Me: ",
      placeholder: "",
      options: [
          {label: "", value: ""}
      ],
      validation: () => {
          return true;
      }
    },
    {
      type: "select", // "radio"
      name: "role",
      value: "",
      label: "Role: ",
      placeholder: "",
      multiple: false,
      options: [
          {label: "Admin", value: "0"},
          {label: "User", value: "1"}
      ],
      validation: () => {
          return true;
      }
    },
    {
      type: "select",
      name: "project",
      value: "",
      label: "Project(s): ",
      placeholder: "",
      multiple: true,
      options: [
          {label: "Client A", value: "A"},
          {label: "Client B", value: "B"},
          {label: "Client C", value: "C"},
      ],
      validation: () => {
          return true;
      }
    },
];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    /*
    input <stream.Readable> The Readable stream to listen to. This option is required.
    output <stream.Writable> The Writable stream to write readline data to.
    completer <Function> An optional function used for Tab autocompletion.
    terminal <boolean> true if the input and output streams should be treated like a TTY, and have ANSI/VT100 escape codes written to it. Default: checking isTTY on the output stream upon instantiation.
    history <string[]> Initial list of history lines. This option makes sense only if terminal is set to true by the user or by an internal output check, otherwise the history caching mechanism is not initialized at all. Default: [].
    historySize <number> Maximum number of history lines retained. To disable the history set this value to 0. This option makes sense only if terminal is set to true by the user or by an internal output check, otherwise the history caching mechanism is not initialized at all. Default: 30.
    removeHistoryDuplicates <boolean> If true, when a new input line added to the history list duplicates an older one, this removes the older line from the list. Default: false.
    prompt <string> The prompt string to use. Default: '> '.
    crlfDelay <number> If the delay between \r and \n exceeds crlfDelay milliseconds, both \r and \n will be treated as separate end-of-line input. crlfDelay will be coerced to a number no less than 100. It can be set to Infinity, in which case \r followed by \n will always be considered a single newline (which may be reasonable for reading files with \r\n line delimiter). Default: 100.
    escapeCodeTimeout <number> The duration readlinePromises will wait for a character (when reading an ambiguous key sequence in milliseconds one that can both form a complete key sequence using the input read so far and can take additional input to complete a longer key sequence). Default: 500.
    tabSize <integer> The number of spaces a tab is equal to (minimum 1). Default: 8.
    signal <AbortSignal> Allows closing the interface using an AbortSignal. Aborting the signal will internally call close on the interface.
    */
  });


switch(type){
    case 'select':
        // 
        break;
    default:
        // 
        break;
}

// const values = ['lorem ipsum', 'dolor sit amet'];
// const showResults = debounce(() => {
//     console.log('\n', values.filter((val) => val.startsWith(rl.line)).join(' '));
// }, 300);
// process.stdin.on('keypress', (c, k) => {
//     showResults();
// });



// //   rl.prompt();
// // rl.question('What is your name ? ', function (name) {
// //         console.log(`${name}, is a citizen of USA`);
// //         // rl.close();
// //     });

//   rl.on('line', (line) => {
//     switch (line.trim()) {
//       case 'hello':
//         console.log('world!');
//         break;
//       default:
//         console.log(`Say what? I might have heard '${line.trim()}'`);
//         break;
//     }

//     console.log(`index: ${index}`);
//     prompt = questions[index].message;
//     rl.prompt();
//   }).on('history', (history) => {
//     console.log(`Received: ${history}`);
//   }).on('pause', () => {
//   console.log('Readline paused.');
// }).on('resume', () => {
//     console.log('Readline resumed.');
//   }).on('close', () => {
//     console.log('Have a great day!');
//     process.exit(0);
//   });

// // if (process.stdin.isTTY) {
// //     process.stdin.setRawMode(true);
// // }
  

// // rl.question('What is your name ? ', function (name) {
// //   rl.question('Where do you live ? ', function (country) {
// //     console.log(`${name}, is a citizen of ${country}`);
// //     rl.close();
// //   });
// // });

// // rl.on('line', (line) => {
// //     console.log(`Received: ${line}`);
// // });
// // rl.on('close', function () {
// //   console.log('\nBYE BYE !!!');
// //   process.exit(0);
// // });