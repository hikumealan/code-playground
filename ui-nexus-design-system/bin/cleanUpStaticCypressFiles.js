const path = require('path');
const fs = require('fs');
const currentWorkingDirectory = process.cwd();

const assetsTargetDirectory = [
  path.join(currentWorkingDirectory, 'playbook', 'angular', 'src', 'assets'),
  path.join(currentWorkingDirectory, 'playbook', 'react', 'src', 'assets')
];


assetsTargetDirectory.forEach(
  (assetFileInfo) => {
    if (fs.existsSync(assetFileInfo)) {
      fs.rmSync(assetFileInfo, { recursive: true,
        force: true });
    }
  }
);

