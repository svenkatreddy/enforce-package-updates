'use strict';

const npmCheck = require('npm-check');
var log4js = require('log4js');
var logger = log4js.getLogger();

function checkDependencies() {
  return npmCheck()
  .then((currentState) => {
    const outdatedPackage = currentState.get('packages').find(pkg => {
      const { moduleName, mismatch } = pkg;
      return mismatch === true;
    });
    if (outdatedPackage) {
      const { moduleName, latest } = outdatedPackage;
      logger.error(`Please update all your packages, ${moduleName} needs to be updated to ${latest}!! \n`);
      return process.exit(1);
    }
    return process.exit(0);
  })
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
}
checkDependencies();
