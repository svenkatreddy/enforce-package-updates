# # enforce-package-updates (epu)

[![Build Status](https://travis-ci.org/svenkatreddy/enforce-package-updates.svg?branch=master)](https://travis-ci.org/svenkatreddy/enforce-package-updates)

[![NPM](https://nodei.co/npm/enforce-package-updates.png?stars=true)](https://nodei.co/npm/enforce-package-updates/)

Enforce package updates on node module or app.
Keeps your app always up to date with latest packages.
Provides a config to ignore semver.

## Install
```
npm install enforce-package-updates --save-dev
```

## Usage
Add it to your `pretest` or `precommit`
package.json
```
"scripts": {
  "pretest": "epu"
}
```


## Options
You can create file called epu-config.json in your root
epu-config.json

### ignoreSemver 
options are `major`, `minor`, `patch` and `nonSemver`

Following example doesn't enforce upgrading major packages.
```
{
  "ignoreSemver": "major"
}
```

Following example doesn't enforce upgrading major, minor packages but enforces patches.
```
{
  "ignoreSemver": ["major", "minor"]
}
```

### ignoreModules
list of module names to be ignored.

Following example ignores chai, prettier, eslint-plugin-prettier
```
{
  "ignoreModules": ["chai", "prettier", "eslint-plugin-prettier"]
}
```

### ignoreDependencies
This enable to ignore all dependencies. Enforce only on **devDependencies**.
Default value is `false`.
Following exmaple ignore all `dependencies`
```
{
  "ignoreDependencies": true
}
```

### ignoreDevDependencies
This enable to ignore all dev dependencies. Enforce only on **dependencies**.
Default value is `false`.
Following exmaple ignore all `devDependencies`
```
{
  "ignoreDevDependencies": true
}
```

### checkModuleswithName 
Enforces only on certain packages with specified name.
Especially useful if you use namespace packages
Following example only enforces updates on packes including `@babel`
```
{
  "checkModuleswithName": "@babel"
}
```

Make Requests here for new features or fixing bugs
https://github.com/svenkatreddy/enforce-package-updates/pulls
