# # enforce-package-updates (epu)

[![Build Status](https://travis-ci.org/svenkatreddy/enforce-package-updates.svg?branch=master)](https://travis-ci.org/svenkatreddy/enforce-package-updates)

[![NPM](https://nodei.co/npm/enforce-package-updates.png?stars=true)](https://nodei.co/npm/enforce-package-updates/)

Enforce package updates on any node module or app.

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

### ignore 
options are `major`, `minor`, `patch`

Following example doesn't enforce upgrading major packages.
```
{
  "ignore": "major"
}
```

Following example doesn't enforce upgrading major, minor packages but enforces patches.
```
{
  "ignore": ["major", "minor"]
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
