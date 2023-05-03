const fs = require('fs');
const path = require('path');

// Get the current directory
const dir = process.cwd();

// Get the directory that the user wants to search
const targetDir = process.argv[2];

// Check if the target directory exists
if (!fs.existsSync(targetDir)) {
  console.log('The target directory does not exist.');
  process.exit(1);
}

// Recursively search the target directory for .css files
fs.readdirSync(targetDir).forEach(file => {
  // Check if the file is a .css file
  if (file.endsWith('.css')) {
    // Rename the file to .scss
    const newFile = file.replace('.css', '.scss');
    fs.renameSync(path.join(targetDir, file), path.join(targetDir, newFile));
    console.log(`RENAMED: ${path.join(targetDir, file)} > ${path.join(targetDir, newFile)}`);
  }
});

// Print a message to the console
console.log('All .css files in the target directory have been renamed to .scss.');