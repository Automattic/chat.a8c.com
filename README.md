# a8c-matrix-element
This repository contains [element-web](https://github.com/vector-im/element-web) with a config appropriate for Automattic's use cases.

This is NOT a fork of element-web, it's just the [released version](https://github.com/vector-im/element-web/releases) (i.e. the "compiled" static files) plus a custom `config.json`, ready to be served by a webserver.

## Getting the latest Element stable version
The `bin/fetch.sh` script facilitates issuing a new release. Note you need `jq`, which you can install with `brew install jq`.

The script performs the following operations:

1. Download Element's latest stable release as a tar file
2. Extract the tar file in into the `public/` directory
3. Replace Element's default `config.json` with [`./config.json`](config.json)

Then you can simply commit the changes and push them to issue a new release:

```shell
bin/fetch.sh

RELEASE=$(cat public/version)
git commit -m "Release $RELEASE"
```
