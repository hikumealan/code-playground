// libs
const fs = require('fs');
// deps
const env = require('dotenv');
console.log('===========================================================');
console.log(process.env);
console.log('-----------------------------------------------------------');
// Load Env Configuration
const config = env.config({
    path: './.env',
    encoding: 'utf8',
    // debug: process.env.DEBUG
});
if (config.error) {
    console.error(config.error);
    throw config.error;
}
console.log(process.env);
console.log('===========================================================');


String.prototype.replaceAll = function (key, value) {
    return this.split(key).join(value);
};

// process.on('uncaughtException', function (err) {
//   console.error(err);
//   process.exit(1);
// });

const processes = Object.keys(process);

const locale = Intl.DateTimeFormat().resolvedOptions().locale;
// console.log(`${new Intl.DateTimeFormat('en-US').format(Date.now())}: Running the NODE CLI`);
console.log(`${new Date().toISOString()}: Running the NODE CLI`);
