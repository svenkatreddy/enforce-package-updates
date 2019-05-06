"use strict";

const npmCheck = require("npm-check");
const log4js = require("log4js");
const logger = log4js.getLogger();
const perf = require("execution-time")();
logger.level = "debug";

function exit(status) {
  const results = perf.stop("epu-flow");
  console.log(`It took ${results.preciseWords}`);
  return process.exit(status);
}

function checkDependencies(config = {}) {
  const { ignore = "", checkModuleswithName = "" } = config;
  return npmCheck()
    .then(currentState => {
      const outdatedPackages = currentState.get("packages").filter(pkg => {
        const { bump, moduleName } = pkg;
        const isIgnored = [].concat(ignore).some(semver => semver === bump);
        const ignoreModule = !moduleName.includes(checkModuleswithName);
        if (ignoreModule) {
          logger.info(
            `Ignoring Module '${moduleName}' because it doesn't contain ${checkModuleswithName} in module name`
          );
          return null;
        }
        if (isIgnored) {
          return null;
        }
        if (bump) {
          return pkg;
        }
        return bump;
      });
      if (Array.isArray(outdatedPackages) && outdatedPackages.length > 0) {
        let outdatedPackagesLog = `Please update all your packages, the following packages are out of date \n`;
        outdatedPackages.forEach(outdatedPackage => {
          const { moduleName, latest } = outdatedPackage;
          outdatedPackagesLog += `'${moduleName}' needs to be updated to ${latest}!! \n`;
        });
        logger.error(outdatedPackagesLog);
        return exit(1);
      }
      logger.info(`Your packages are up to date!!! \n`);
      return exit(0);
    })
    .catch(error => {
      logger.error(error);
      return exit(1);
    });
}

module.exports = checkDependencies;
