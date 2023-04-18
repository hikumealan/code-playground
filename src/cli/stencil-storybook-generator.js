const fs = require("fs");
const path = require("path");

const stencil = require("stencil");
const storybook = require("@storybook/addon-storyshots/dist/server/storybook");

const storyPath = path.join(__dirname, "stories");

function parseStencilComponent(component) {
  const props = component.props;
  const stories = [];
  for (const prop in props) {
    stories.push({
      name: prop,
      component: component,
      props: {
        [prop]: props[prop],
      },
    });
  }
  return stories;
}

function generateStorybookStories(component) {
  const stories = parseStencilComponent(component);
  const storyFile = path.join(storyPath, component.name + ".stories.js");
  fs.writeFileSync(storyFile, storybook.generateStories(stories));
}

function main() {
  const components = stencil.getComponents();
  for (const component of components) {
    generateStorybookStories(component);
  }
}

main();
