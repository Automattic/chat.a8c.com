# a8c-matrix-element
This repository contains [element-web](https://github.com/vector-im/element-web) with a config appropriate for Automattic's use cases.

This is NOT a fork of element-web, it's just the [released version](https://github.com/vector-im/element-web/releases) (i.e. the "compiled" static files) plus a custom `config.json`. This site is served by GitHub Pages.

## Deployment
New releases of Element are automatically deployed by GitHub Actions.

There are three Actions at play:

1. [`latest-versions.yml`](.github/workflows/latest-versions.yml): Checks if a new version of element-web has been released and if so, writes the version into [`latest-versions/element`](latest-versions/element). Scheduled to run every week.
2. [`fetch.yml`](.github/workflows/fetch.yml): Downloads the version specified in the  [`latest-versions/element`](latest-versions/element) file, extracts into the [`docs/`](docs) directory, and commits the result if there are any changes. Additionally, applies a custom [`config.json`](overrides/element/config.json), and copies files under [`apps/public/`](apps/public) into [`docs/`](docs). Runs when [`latest-versions/element`](latest-versions/element) changes.
3. Site is deployed on pushes to the `master` branch. We don't control this action, it's provided by GitHub Pages.

You possible to **deploy manually** by launching the [`fetch.yml`](.github/workflows/fetch.yml) workflow. To do so, click the `Run workflow` button in the [workflow page](https://github.com/Automattic/a8c-matrix-element/actions/workflows/fetch.yml).
