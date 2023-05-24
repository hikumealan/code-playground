const { capitalCase } = require('change-case');
const fs = require('fs');
const { dirname, join } = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);

const projectPath = (path) => join(__dirname, '..', path);
const varsFile = projectPath('packages/nexus/src/styles/_variables.scss');
const outFile = projectPath(`tmp/colorVariables.json`);

const isEmptyLine = (line) => (/^\s*$/).test(line);
const isColorLine = (line) => (/^\$[\w-]+:\s?(?:#[A-F0-9]+|rgba?\([^;]*);$/).test(line);
const isCommentLine = (line) => (/^\/\/\s/).test(line);
const translateCommentToHeading = (line) => `${line.replace(/^\/* /g, '')}`;

const extractVarData = (line) => {
  const [
    name,
    value
  ] = line.split(':').map((piece) => piece.replace(/^\s+([^\s;]+)[\s;]+$/, '$1'));
  const [group] = capitalCase(name).split(' ');

  return {
    group,
    name,
    value
  };
};

const startVarBlock = (body, line) => [
  ...body,
  {
    title: translateCommentToHeading(line),
    colors: {}
  }
];

const addLineToLastBlock = (body, line) => {
  const head = body.slice(0, -1);
  const last = body[body.length - 1] || {
    title: '',
    colors: {}
  };
  const lineData = extractVarData(line);
  const colorGroup = last.colors[lineData.group] || {};

  return [
    ...head,
    {
      ...last,
      colors: {
        ...last.colors,
        [lineData.group]: {
          ...colorGroup,
          [lineData.name]: lineData.value
        }
      }
    }
  ];
};

mkdir(dirname(outFile), { recursive: true })
  .then(() => readFile(varsFile, 'utf8'))
  .then((contents) => contents.split('\n'))
  .then((lines) => {
    const data = lines.reduce((struct, line) => {
      if (isEmptyLine(line)) {
        return struct;
      }

      if (isCommentLine(line)) {
        return startVarBlock(struct, line);
      }

      if (isColorLine(line)) {
        return addLineToLastBlock(struct, line);
      }

      return struct;
    }, []);

    return data.filter((block) => Boolean(Object.keys(block.colors).length));
  })
  .then((outData) => writeFile(outFile, JSON.stringify(outData)));
