/* eslint-disable no-process-exit, no-sync, no-console */

const fs = require('fs');
const pa11y = require('pa11y');
const glob = require('glob');
const async = require('async');

const [, , customPort] = process.argv;

const PORT = customPort ? customPort : '3201';

const outPath = './target/www/playbook/reports/';

const puppeteer = require('puppeteer');
process.setMaxListeners(0);

const componentsPath = `http://localhost:${PORT}/stencil/temp/`;
const mapComponentRoutes = () => {
  const files = glob.sync('./playbook/stencil/examples/**/*.html', {
    nodir: true
  });

  const fileNames = files.map((file) => {
    const fileArr = file.split('/');
    const folderIdx = 2;

    return {
      path: fileArr[fileArr.length - 1],
      folder: fileArr[fileArr.length - folderIdx]
    };
  });

  return fileNames;
};

const createFile = (results, outFile) => {
  if (!fs.existsSync(outPath)) {
    fs.mkdirSync(outPath);
  }

  fs.writeFileSync(`${outPath}${outFile}`, JSON.stringify(results), 'utf8');
};

const build = (path, routes, outFile, done) => {
  const run = async () => {
    let browser;

    try {
      browser = await puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage'
        ],
        ignoreHTTPSErrors: true
      });

      Promise.all(routes.map((route) => pa11y(`${path}${route.path}`, {
        wait: 3000,
        timeout: 300000,
        includeWarnings: false,
        standard: 'WCAG2AA',
        threshold: 9,
        reporter: 'json',
        browser,
        ignore: [
          'WCAG2AA.Principle1.Guideline1_3.1_3_1.F92,ARIA4'
        ],
        chromeLaunchConfig: {
          ignoreHTTPSErrors: false
        }
      }), [])).then((allResults) => {
        allResults.filter((result) => result.issues.filter((issue) => {
          if (issue.type === 'error') {
            console.log('Page URL: ', result.pageUrl);
            console.log('Issue: ', issue);

            process.exit(1);
          }

          return false;
        }));

        const resultsMap = allResults.map((result) => {
          const arr = result.pageUrl.split('.html')[0].split('/');

          const componentName = arr[arr.length - 1];

          return {
            pageUrl: result.pageUrl,
            playbookUrl: `/playbook/components/${componentName}.html`,
            componentName,
            issues: result.issues
          };
        }).filter(Boolean);

        createFile(resultsMap, outFile);

        browser.close();

        done();
      }).catch((error) => {
        console.error(error.message);

        if (browser) {
          browser.close();
        }
      });
    }
    catch (error) {
      console.error(error.message);

      if (browser) {
        await browser.close();
      }
    }
  };

  run();
};

console.log('----------------------');
console.log('Pa11y...');
console.log('----------------------');

async.waterfall([
  (callback) => {
    build(componentsPath, mapComponentRoutes(), 'component-accessibility.json', callback);
  }
]);
