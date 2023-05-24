const fs = require('fs');
const path = require('path');

const results = [
    path.join(__dirname, '..', 'allure-results'),
    path.join(__dirname, '..', 'allure-report')
];

results.forEach(
    (folderName) => {
        if(fs.existsSync(folderName)) {
            fs.rmSync(folderName, {recursive: true});
            fs.mkdirSync(folderName, {recursive: true});
        }    
    }
);