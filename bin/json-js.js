#!/usr/bin/env node
const { program } = require('commander');

function collect(value, previous) {
    return previous.concat([value]);
}

program
    .option('-f, --file <file>', "JSON or JS env file (multiple files can be provided)", collect, [])
    .option('--replace-existing', "Replace existing environment variables")
    .option('--preserve-attributes', "Preserve variable attributes (Will be injected as JSON objects)")

program.parse();

function main() {
    console.log("Hello from main");
    console.log(program.opts().file)
    console.log(program.opts().preserveExisting)
    console.log(program.opts().fileList)
}

// if (require.main === module) {
main();
// }