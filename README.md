# chat.a8c.com
This repository contains the static site behind [chat.a8c.com](https://chat.a8c.com), which is composed by multiple *apps*:

- [`apps/element`](apps/element): [element-web](https://github.com/vector-im/element-web) with a custom config
- [`apps/matrix.to`](apps/matrix.to): [Automattic/matrix.to](https://github.com/Automattic/matrix.to)

We use GitHub actions to fetch the latest release of each app, and deploy the site.

## Overrides
You can override any file of any app, by placing it under the same path under the `overrides` directory. For example, `overrides/element/index.html` would override `apps/element/index.html`, upon deployment. 

## Actions
The following GitHub Actions are at play:

1. Every Sunday, [discover latest versions of apps](https://github.com/Automattic/chat.a8c.com/actions/workflows/latest-versions.yml): check if a new version of each app has been released and if so, write the version in a file under [`latest-versions/`](latest-versions), for example, `latest-versions/element`. Scheduled to run every week.
2. When a file changes under `latest-versions/`, [fetch apps](https://github.com/Automattic/chat.a8c.com/actions/workflows/fetch.yml): for each app, download the release for the version specified in its [`latest-versions/`](latest-versions) file, extract the release into the [`apps/`](apps) directory, and commit the result if there are any changes.
3. When a file changes under `apps`, [deploy apps](https://github.com/Automattic/chat.a8c.com/actions/workflows/deploy.yml): copy each app into the `public` branch, and apply overrides.
4. On pushes to the `public` branch, [deploy the site](https://github.com/Automattic/chat.a8c.com/actions/workflows/pages/pages-build-deployment): we don't control this action, it's provided by GitHub Pages.
