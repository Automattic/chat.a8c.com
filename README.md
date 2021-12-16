# a8c-matrix-element
This repository contains [element-web](https://github.com/vector-im/element-web) with a config appropriate for Automattic's use cases.

This is NOT a fork of element-web, it's just the [released version](https://github.com/vector-im/element-web/releases) (i.e. the "compiled" static files) plus a custom `config.json`, ready to be served by a webserver.

This is deployed by [a8c-matrix-infrastructure](https://github.com/Automattic/a8c-matrix-infrastructure).

## Prerequisites
You'll need `jq` to run the `bin/release..sh` script:

```shell
brew install jq
```

## Usage
Download the latest Element release with the following command. The release will be extracted into the `public/` directory, and the custom [`config.json`](config.json) copied into it:

```shell
bin/release.sh
```

Commit the changes and push them:

```shell
RELEASE=$(cat public/version)
git commit -m "Release $RELEASE"
```

A deployment will automatically be triggered on the DigitalOcean app.
