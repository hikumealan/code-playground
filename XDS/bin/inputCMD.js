const fs = require('fs');
const path = require('path');
const readline = require('readline');
const pkg = fs.existsSync(process.env.npm_package_json) ? require(process.env.npm_package_json) : null;
const {config} = pkg;

// console.log(pkg);
// console.log(config);

const cfg = (!!config) && (config.constructor === Object) ? JSON.parse(JSON.stringify(config)) : {};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    historySize: 0
});

rl.question('> Project Name: ', (line) => {
    const cnf = Object.assign(cfg, {project: line});
    pkg.config = cnf;
    // console.log(JSON.stringify(pkg, null, 2));
    fs.writeFileSync(process.env.npm_package_json, JSON.stringify(pkg, null, 2), 'binary');
    // const pathname = `${path.join(__dirname, ENV.APP_MOCK_FOLDER)}${url}.json`;
    // try{
    //     const stream = fs.createWriteStream(process.env.npm_package_json, { flags: 'w' });
    //     stream.write(JSON.stringify(pkg, null, 2));
    //     stream.end();
    // }
    // catch(e){
    //     console.error(e);
    // }
    setTimeout(() => {
        process.exit(); 
    }, 3000);
});