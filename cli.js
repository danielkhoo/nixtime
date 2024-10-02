#!/usr/bin/env node

const yargs = require('yargs/yargs');

var argv = yargs(process.argv.slice(2)).argv;
const now = new Date();
now.getTime()

// No Arg: Print Current Unix Timestamp
if (argv._.length === 0) {
  console.log(now.getTime());
  return;
}

// Other treat each arg as a timestamp
const timestamps = argv._;

async function run() {
  timestamps.forEach((timestamp) => {
    const digitLength = timestamp.toString().length
    if (isNaN(timestamp) || (digitLength != 10 && digitLength != 13)) {
      console.log("Invalid unix timestamp");
      return;
    }

    let t = timestamp
    if (digitLength == 10) t = timestamp * 1000
    const d = new Date(t);
    console.log(d.toUTCString());
  });
}
run();
