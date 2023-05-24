const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '..', 'allure-report', 'history');
const targetPath = path.join(__dirname, '..', 'allure-results', 'history');

if(fs.existsSync(sourcePath)) {
    fs.cpSync(sourcePath, targetPath, {recursive: true});
}