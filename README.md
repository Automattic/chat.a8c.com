# a8c-matrix-element
This repository contains [element-web](https://github.com/vector-im/element-web) with a config appropriate for Automattic's use cases.

This is NOT a fork of element-web, it's just the [released version](https://github.com/vector-im/element-web/releases) (i.e. the "compiled" static files) plus a custom `config.json`. This site is served by GitHub Pages.

## Deployment
New releases of Element are automatically deployed by GitHub Actions. There are two Actions at play:

1. [`latest-version.yml`](.github/workflows/latest-version.yml): Checks if a new version of element-web has been released and if so, writes the version into [`latest-version/version`](latest-version/version). Scheduled to run every week.
2. [`release.yml`](.github/workflows/release.yml): Downloads the version specified in the  [`latest-version/version`](latest-version/version) file, extracts into the [`docs/`](docs) directory, and commits the result if there are any changes. Aditionally, applies our custom [`config.json`](config.json) and writes all the files in the [`public`](public) directory into the [`docs`](docs) directory. Scheduled to run every times [`latest-version/version`](latest-version/version) changes.

You can also deploy by manually launching the [`release.yml`](.github/workflows/release.yml) workflow. To do so, click the `Run workflow` button in the [workflow page](https://github.com/Automattic/a8c-matrix-element/actions/workflows/release.yml).
