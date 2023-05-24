#!/usr/bin/env node

/* eslint-disable no-sync */

const fs = require('fs');

const outFile = './tmp/icons.json';
const baseIconFolder = './packages/nexus/src/assets/icons';
const folders = fs.readdirSync(baseIconFolder);

const iconMap = folders.map((folder) => {
  const folderPath = `${baseIconFolder}/${folder}`;

  if (fs.statSync(folderPath).isDirectory()) {
    const files = fs.readdirSync(folderPath);

    const fileMap = files.map((svgfile) => {
      if (svgfile === '.DS_Store') {
        return null;
      }

      const folderPathSegments = folderPath.split('/');

      return {
        content: fs.readFileSync(`${folderPath}/${svgfile}`, 'utf8'),
        folder: folderPathSegments[folderPathSegments.length - 1],
        name: svgfile,
        filepath: `${folderPath}/${svgfile}`
      };
    }).filter(Boolean);

    return fileMap;
  }

  return null;
}).filter(Boolean);

fs.writeFileSync(outFile, JSON.stringify(iconMap));
