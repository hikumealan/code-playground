const fs = require('fs');
const path = require('path');

String.prototype.replaceAll = function (key, value) {
    return this.split(key).join(value);
};

const readdirRecursivelySync = (location, result = []) => {
    const separator = path.sep;
    const files = fs.existsSync(location) ? fs.readdirSync(location) : [];
    files.forEach((file) => {
        if (fs.statSync(location + separator + file).isDirectory()) {
            result = readdirRecursivelySync(`${location}${separator}` + file, result);
        } else {
            result.push(path.join(`${location}${separator}`, file));
        }
    });
    return result;
};

const params = Array.isArray((process || {}).argv) && process.argv.length > 2 ? process.argv.slice(2) : [];
const dir = params[0].split('=')[0] === 'dir' ? params[0].split('=')[1] : '';
const directory = path.join(__dirname, dir);
const files = readdirRecursivelySync(directory); // fs.readdirSync(directory);

if (files.length) {
    const css = '.css';
    const ext = '.scss';
    for (const file of files) {
        const name = file.replace(css, ext);
        console.log(file);
        console.log(name);
        // TODO: read contents of files and if it contains a .css file replace with .scss
        if (file.endsWith(css)) {
            fs.renameSync(file, name);
        }
    }
    console.log('Rename complete!');
}
