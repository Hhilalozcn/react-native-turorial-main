const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const nodeModulesPath = path.join(projectRoot, 'node_modules');
const packageLockPath = path.join(projectRoot, 'package-lock.json');

try {
  if (fs.existsSync(nodeModulesPath)) {
    execSync(`rimraf "${nodeModulesPath}"`, { stdio: 'inherit' });
  }
  
  if (fs.existsSync(packageLockPath)) {
    fs.unlinkSync(packageLockPath);
  }
  
  console.log('Cleanup completed successfully!');
} catch (error) {
  console.error('Error during cleanup:', error);
  process.exit(1);
}
