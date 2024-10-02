# nixtime

[![](https://img.shields.io/npm/v/nixtime.svg?style=flat)](https://github.com/danielkhoo/nixtime)

A simple CLI utility to get the current unix timestamp or convert timestamps to a human readable timestamp.

## Usage

Get current timestamp

```bash
$ npx nixtime
---------------------------
1727895286719
```

Convert unix timestamps

```bash
$ npx 1727895286719
---------------------------
Wed, 02 Oct 2024 18:54:46 GMT

```

```bash
$ npx 1700000000 1727895286719
---------------------------
Tue, 14 Nov 2023 22:13:20 GMT
Wed, 02 Oct 2024 18:54:46 GMT
```

## License

MIT
