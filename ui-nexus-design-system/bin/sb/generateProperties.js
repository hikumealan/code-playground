/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const {
  removeDirectoryRecursively,
  createDirectoryRecursively,
  generateTargetArgFileName,
  writeToFile,
  getEventTable
} = require('./utils');

const propsPath = path.join(__dirname, '../../playbook/stories/props.json');
const stencilProps = fs.readFileSync(propsPath, 'utf8');
const componentLookup = JSON.parse(stencilProps);

const storybookRoot = path.join(__dirname, '../../playbook/stories/pages');
const categories = path.join(__dirname, '../../playbook/stories/overrides/categories.json');
const argOverrides = path.join(__dirname, '../../playbook/stories/overrides/args.json');
const disableControls = path.join(__dirname, '../../playbook/stories/overrides/disableControls.json');

const categoriesLookUp = JSON.parse(fs.readFileSync(categories, 'utf8'));
const argumentOverrides = JSON.parse(fs.readFileSync(argOverrides, 'utf8'));
const disableControlsOverrides = JSON.parse(fs.readFileSync(disableControls, 'utf8'));

// GENERATORS
const generateProperties = () => {
  removeDirectoryRecursively(storybookRoot);
  createDirectoryRecursively(storybookRoot);
  if (Array.isArray(componentLookup.components)) {
    componentLookup.components.forEach((element) => {
      if (Array.isArray(element.props) && element.filePath.split('/').length <= 6) {
        const name = generateTargetArgFileName(element.tag);
        const category = categoriesLookUp[name];
        const categoriesFolder = path.join(storybookRoot, category, name);
        createDirectoryRecursively(categoriesFolder);
        const argsFile = path.join(categoriesFolder, `args.json`);
        const controlsFile = path.join(categoriesFolder, `controls.json`);
        const eventsFile = path.join(categoriesFolder, `event.mdx`);

        const argProperties = {};
        const controlProperties = {};
        let control;
        const eventDetails = [];

        element.props.forEach((prop) => {
          argProperties[`${prop.name}`] = (prop.default || '\'\'').replace('[', '\'[').replace(']', ']\'');
          if (prop.type === 'boolean') {
            control = {
              type: 'boolean'
            };
          }
          else if (prop.type.split('|').length > 1) {
            control = {
              type: 'select'
            };
          }
          else {
            control = {};
          }

          if (name in disableControlsOverrides) {
            if (disableControlsOverrides[name].filter((key) => key === prop.name).length > 0) {
              control = {
                type: ''
              };
            }
          }

          controlProperties[`${prop.name}`] = {
            name: `${prop.name}`,
            description: `${prop.docs}`,
            table: {
              defaultValue: {
                summary: `${prop.default}`
              },
              type: {
                summary: `${prop.type}`
              }
            },
            control
          };

          if (prop.type.split('|').length > 1) {
            controlProperties[`${prop.name}`].options = prop.type.replace(/"/g, '').split('|').map((option) => option.replace(/^\s+|\s+$/gm, ''));
          }
        });

        element.events.forEach((event) => {
          eventDetails.push({
            name: event.event,
            description: event.docs,
            type: `Custom&lt;${event.detail}&gt;`
          });
        });

        Object.assign(argProperties, argumentOverrides[name]);
        if (Object.keys(argProperties).length > 0) {
          writeToFile(argsFile, JSON.stringify(argProperties, null, 2).replaceAll('\'', '').replace(/"(true|false)"/g, '$1'), 'utf8');
        }

        writeToFile(controlsFile, JSON.stringify(controlProperties, null, 2));

        if (eventDetails.length > 0) {
          const eventTableData = getEventTable(eventDetails);
          writeToFile(eventsFile, eventTableData);
        }
        else {
          writeToFile(eventsFile, '');
        }
      }
    });
  }
};

module.exports = {
  generateProperties
};
