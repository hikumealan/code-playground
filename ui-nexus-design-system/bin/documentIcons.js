#!/usr/bin/env node

/* eslint-disable id-length */
/* eslint-disable no-sync */

const fs = require('fs');

const iconFile = 'playbook/pages/resources/iconography.hbs';
const iconFileContent = `{{#template 'default'}}
  {{#pageTitle}}Iconography{{/pageTitle}}
  <!--  This file is auto generated. Do Not Edit. -->
  <p>These are the icons used in the component library. File path may vary depending on framwork and usage.</p>`;
const baseIconFolder = './packages/nexus/src/assets/icons';
const files = fs.readdirSync(baseIconFolder);

const toTitleCase = (str) => {
  const string = str.toLowerCase().split('-');

  for (let idx = 0; idx < string.length; idx++) {
    string[idx] = string[idx].charAt(0).toUpperCase() + string[idx].slice(1);
    if (string[idx] === 'Av') {
      string[idx] = 'AV';
    }
  }

  return string.join(' ');
};


const getSVGs = (path, folder, svgfile) => {
  const fileContent = fs.readFileSync(`${path}/${svgfile}`, 'utf8');

  return `<li class="playbook-icon">
    <span class="playbook-icon-example">
    ${fileContent}
    </span>
    <span class="playbook-icon-human-name">
    ${toTitleCase(svgfile).split('.svg')[0]}
    </span>
    <div class="playbook-icon-css-name">
    <pre class="language-javascript"><code class="language-javascript">
    ${path}/${svgfile}
    </code></pre>
    </div>
    </li>`;
};

fs.writeFileSync(iconFile, iconFileContent);

files.forEach((file) => {
  if (file === '.DS_Store') {
    return;
  }

  const path = `${baseIconFolder}/${file}`;

  if (fs.statSync(path).isDirectory()) {
    let markup;
    markup = '';
    markup += `<h2>${toTitleCase(file)}</h2>\n`;
    markup += '<ul class="playbook-icon-list">\n';

    const pathFile = fs.readdirSync(path);

    if (pathFile.length > 0) {
      pathFile.forEach((svgfile) => {
        if (svgfile === '.DS_Store') {
          return;
        }

        markup += getSVGs(`${path}`, file, svgfile);
      });

      fs.appendFileSync(iconFile, markup);
      fs.appendFileSync(iconFile, '</ul>\n');
    }
  }
});

fs.appendFileSync(iconFile, '</ul>{{/template}}\n');
