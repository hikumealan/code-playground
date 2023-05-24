const { generateProperties } = require('./generateProperties');
const { jsStoryGenerator } = require('./generateStories/generateJavascriptStories');
const { reactStoryGenerator } = require('./generateStories/generateReactStories');
const { angularStoryGenerator } = require('./generateStories/generateAngularStories');

generateProperties();
jsStoryGenerator();
reactStoryGenerator();
angularStoryGenerator();
