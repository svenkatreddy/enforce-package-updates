#! /usr/bin/env node

const path = require("path");
const cwd = process.cwd();
const fs = require("fs");
const perf = require("execution-time")();
const outdated = require("./outdated");

function start() {
  perf.start("epu-flow");

  const configFile = path.resolve(cwd, "epu-config.json");
  let config;
  if (!fs.existsSync(configFile)) {
    console.log("Config File not found");
  } else {
    const contents = fs.readFileSync(configFile, "utf-8");
    config = JSON.parse(contents);
  }
  outdated(config);
}

start();
