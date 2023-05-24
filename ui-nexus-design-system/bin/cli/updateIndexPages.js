/* eslint-disable no-console */
const changeCase = require('change-case');
const replace = require('replace');
const fs = require('fs');

const paths = require('./paths');

module.exports = (componentName, exampleFileName) => {
  const angularIndex = `${paths.playbookAngular}/views/index/index.component.html`;
  const reactIndex = `${paths.playbookReact}/App.tsx`;
  const stencilIndex = `${paths.stencil}/index.html`;

  const updateIndexPage = (file, newLink) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        console.log(err);

        return;
      }

      const html = data.toString();
      const [listItems] = html.split('<ul>')[1].split('</ul>');
      const listItemsArr = listItems
        .split('<li>')
        .filter(Boolean)
        .slice(1)
        .map((string) => string.trim());

      const sorted = listItemsArr.concat(newLink).sort();

      const sortedHtml = `<li>${sorted.join('\n    <li>')}`;

      replace({
        regex: '<ul>(.|\n)*?</ul>',
        replacement: `<ul>
    ${sortedHtml}
  </ul>`,
        paths: [file],
        recursive: false,
        silent: false
      });
    });
  };

  console.log('Update angular index page');
  updateIndexPage(
    angularIndex,
    `<a href="?${changeCase.camelCase(exampleFileName || componentName)}">${changeCase.capitalCase(
      exampleFileName || componentName
    )}</a></li>`
  );

  console.log('Update react index page');
  updateIndexPage(
    reactIndex,
    `<a href="/?component=${componentName}/${exampleFileName || componentName}">${changeCase.capitalCase(
      exampleFileName || componentName
    )}</a></li>`
  );

  console.log('Update stencil index page');
  updateIndexPage(
    stencilIndex,
    `<a href="/temp/${exampleFileName || componentName}.html">${changeCase.capitalCase(
      exampleFileName || componentName
    )}</a></li>`
  );
};
