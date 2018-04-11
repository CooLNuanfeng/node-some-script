

// const readline = require('readline');
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What do you think of Node.js? \n', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);
// });
//
// rl.on('line', (input) => {
//   console.log(`Received: ${input}`);
// });
//
// rl.on('pause', () => {
//   console.log('Readline paused.');
// });



// var readline = require('readline'),
//     rl = readline.createInterface(process.stdin, process.stdout);
//
// rl.setPrompt('OHAI> ');
// rl.prompt();
//
// rl.on('line', function(line) {
//   switch(line.trim()) {
//     case 'hello':
//       console.log('world!');
//       break;
//     default:
//       console.log('Say what? I might have heard `' + line.trim() + '`');
//       break;
//   }
//   rl.prompt();
// }).on('close', function() {
//   console.log('Have a great day!');
//   process.exit(0);
// });
