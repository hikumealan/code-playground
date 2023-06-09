#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const events = require('events');
// const package = require('package.json');
const readline = require('readline');

const event = new events.EventEmitter();
// const prompt = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });


const arg = (process || {}).argv;
const env = (process || {}).env;
const pkg = env?.npm_package_json && fs.existsSync(process.env.npm_package_json) ? fs.readFileSync('package.json', 'binary').toString() : null;
// console.log(arg);
// console.log(env);
console.log(env?.npm_package_json);
console.log(pkg);

const keys = Object.keys(process);

console.log('_______________________________________________________________');
console.log(this);
console.log(global);
console.log('_______________________________________________________________');


console.log('===============================================================');
console.log('===============================================================');

keys.forEach((key) => {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(key.toUpperCase());
    console.log('');
    console.log(process[key]);
    console.log('---------------------------------------------------------------');
});

// if (fs.existsSync('package.json')) {
//     pkg = fs.readFileSync('package.json', 'binary').toString();
// }

// prompt.question('Component Name:', (res) => {
//     console.log(`res "${res}"`);
//     prompt.close();
// });

