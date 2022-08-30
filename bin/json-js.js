#!/usr/bin/env node
const { program } = require('commander');
const spawn = require('cross-spawn');

function collect(value, previous) {
    return previous.concat([value]);
}

function run(name, options, command) {
    spawn(program.opts().command, {
        env: {}
    })
}

program
    .requiredOption('-f, --file <file>', "JSON or JS env file (multiple files can be provided, duplicate keys will be overwritten)", collect, [])
    .option('--replace-existing', "Replace existing environment variables")
    .option('--preserve-attributes', "Preserve variable attributes (Will be injected as JSON objects)")
    .requiredOption('-c, --command', "command to run")
    .action(run)


program.parse();

// function main() {
//     console.log("Hello from main");
//     console.log(program.opts())
// }

// if (require.main === module) {
// main();
// }