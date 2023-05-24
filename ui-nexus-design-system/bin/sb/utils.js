const fs = require('fs');
const path = require('path');

const docsRoot = path.join(__dirname, '..', '..', 'playbook');
const categories = path.join(docsRoot, 'stories', 'overrides', 'categories.json');

/* Component to category lookup map loaded from json configuration. */
const categoriesLookUp = JSON.parse(fs.readFileSync(categories, 'utf8'));

// Removes directories and sub directories recursively.
//
// @params: {directory} string: Removes directories and sub directories.
// @return: void
const removeDirectoryRecursively = (directory) => {
  if (fs.existsSync(directory)) {
    fs.rmSync(directory, { recursive: true });
  }
};

// Creates directories and sub directories recursively.
//
// @params: {directory} string: Creates directories and sub directories.
// @return: void
const createDirectoryRecursively = (directory) => {
  fs.mkdirSync(directory, { recursive: true });
};

// Extract component name.
//
// @param: {tag}: string
// @return component name from a nexus tag.
//   For Eg: if tag name is `nexus-progress-bar` then result will be `progress-bar`.
const generateTargetArgFileName = (tag) => {
  const name = tag.replace('nexus-', '').split('.');

  return name[0];
};

// Write to file.
//
// @params {fileName}: string - Filename to write to.
// @params {data}: string - Data to write.
const writeToFile = (fileName, data) => {
  if (fs.existsSync(path.dirname(fileName))) {
    fs.appendFileSync(fileName, data);
  }
};


// Generates event table for the component.
const getEventTable = (data) => {
  const tBody = data.map((row) => `<tr>
<td>${row.name}</td>
<td>${row.description}</td>
<td>${row.type}</td>
</tr>`).join('\n');

  const tHead = `<tr>
<th>Event</th>
<th>Description</th>
<th>Type</th>
</tr>`;

  const tContent = `
<h3 className="nexus-h3">Events</h3>

<table className="docblock-argstable">
<thead className="docblock-argstable-head">
${tHead}
</thead>
<tbody className="docblock-argstable-body">
${tBody}
</tbody>
</table>`;

  return tContent;
};


// Convert the starting character of a given string to be uppercase.
//
// @params {string} Data or string to capitalize.
// @return string: string
const capitalize = (data) => `${data.charAt(0).toUpperCase()}${data.slice(1)}`;

// Check if path is present.
//
// @param {string} filePath: The full path the file or directory.
//
//
// @returns {boolean} Returns True or False based on how the function is evaluated.
//
const isPathPresent = (filePath) => fs.existsSync(filePath);

// Get category lookup for a given component name. If the component is not in list it will be
// categorized as unmapped.
//
// @param {string} componentName
//
// returns {string} category type. For example "Buttons and Indicators."
//
const getCategory = (componentName) => {
  if (componentName in categoriesLookUp) {
    return capitalize(categoriesLookUp[componentName]);
  }

  return 'unmapped';
};

const prettifyStoryNames = (name) => name
  .replaceAll('-', ' ')
  .replace(/([A-Z])/g, (letter) => ` ${letter}`).trim();


module.exports = {
  removeDirectoryRecursively,
  createDirectoryRecursively,
  generateTargetArgFileName,
  writeToFile,
  getEventTable,
  capitalize,
  isPathPresent,
  getCategory,
  prettifyStoryNames
};
