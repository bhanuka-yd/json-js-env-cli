#!/usr/bin/env node
const { program } = require('commander');
const spawn = require('cross-spawn');
const jsonJS = require("json-js-env");
const path = require("path");

function collect(value, previous) {
    return previous.concat([value]);
}

function run(name, options, command) {
    const finalEnvs = process.env;
    const files = program.opts().file;
    for (var x = 0; x < files.length; x++) {
        var _path = files[x];
        if (!path.isAbsolute(_path)) {
            _path = path.join(process.cwd(), _path);
        }

        const out = jsonJS({
            file: _path,
            preserveAttributes: program.opts().preserveAttributes,
            replaceExistingENVs: program.opts().replaceExistingEnvs
        });
        Object.entries(out).forEach(([k, v]) => finalEnvs[k] = v);
    }
    const cmd = program.opts().command.split(/\s+/);
    const cmd_1 = cmd.splice(0, 1)[0];

    spawn.spawn(cmd_1, cmd, {
        env: finalEnvs,
        stdio: "inherit",
    })
}

program
    .requiredOption('-f, --file <file>', "JSON or JS env file (multiple files can be provided, duplicate keys will be overwritten)", collect, [])
    .option('--replace-existing-envs', "Replace existing environment variables")
    .option('--preserve-attributes', "Preserve variable attributes (Will be injected as JSON objects)")
    .requiredOption('-c, --command <command>', "command to run")
    .action(run)


program.parse();

// function main() {
//     console.log("Hello from main");
//     console.log(program.opts())
// }

// if (require.main === module) {
// main();
// }