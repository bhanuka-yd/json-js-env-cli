# CLI for json-js-env

## Installation

### Global

```
npm install -g json-js-env-cli
```

### Local

```
npm install json-js-env-cli
```

## Usage

```
Usage: json-js-env-cli [options]

Options:
  -f, --file <file>        JSON or JS env file (multiple files can be provided, duplicate keys will be overwritten) (default: [])
  --replace-existing-envs  Replace existing environment variables
  --preserve-attributes    Preserve variable attributes (Will be injected as JSON objects)
  -c, --command <command>  command to run
  -h, --help               display help for command
```

## Example

```
json-js-env-cli -f ./.env.json -c "node index2.js"
```
