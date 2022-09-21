# chat.a8c.com
This repository contains the static site behind [chat.a8c.com](https://chat.a8c.com), which is composed by multiple *apps*:

- [`apps/element`](apps/element): [element-web](https://github.com/vector-im/element-web) with a custom config
- [`apps/matrix.to`](apps/matrix.to): [Automattic/matrix.to](https://github.com/Automattic/matrix.to)

We use GitHub actions to fetch the latest release of each app, and deploy the site.

## Overrides
You can override any file of any app, by placing it under the same path under the `overrides` directory. For example, `overrides/element/index.html` would override `apps/element/index.html`, upon deployment. 

## Actions
The following GitHub Actions are at play:

1. **Every Sunday, [discover latest versions of apps](https://github.com/Automattic/chat.a8c.com/actions/workflows/latest-versions.yml)**: check if a new version of each app has been released and if so, write the version in a file under [`latest-versions/`](latest-versions), for example, `latest-versions/element`.
2. **When a file changes under `latest-versions/`, [fetch apps](https://github.com/Automattic/chat.a8c.com/actions/workflows/fetch.yml)**: for each app, download the release for the version specified in its [`latest-versions/`](latest-versions) file, extract the release into the [`apps/`](apps) directory, and commit the result if there are any changes.
3. **When a file changes under `apps`, [deploy apps](https://github.com/Automattic/chat.a8c.com/actions/workflows/deploy.yml)**: copy each app into the `public` branch, and apply overrides.
4. **On pushes to the `public` branch, [deploy the site](https://github.com/Automattic/chat.a8c.com/actions/workflows/pages/pages-build-deployment)**: we don't control this action, it's provided by GitHub Pages.

### Access token
GitHub actions are [automatically provided](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#using-the-github_token-in-a-workflow) with a `GITHUB_TOKEN`, so normally you don't need to provide your own token. **However**, using this default token will prevent chaining of actions, i.e. you cannot run an action as a result of another action:

> When you use the repository's `GITHUB_TOKEN` to perform tasks, events triggered by the GITHUB_TOKEN, with the exception of `workflow_dispatch` and `repository_dispatch`, will not create a new workflow run. This prevents you from accidentally creating recursive workflow runs.
>
> For example, if a workflow run pushes code using the repository's `GITHUB_TOKEN`, a new workflow will not run even when the repository contains a workflow configured to run when `push` events occur.

For this reason, since we do need to chain actions, a [Personal Access Token (PAT)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) must be provided. At the moment, the PAT used belongs to [@psrpinto](https://github.com/psrpinto). If you need to provided a different PAT, you can do so as follows.

First, [create a Personal Access Token](https://github.com/settings/tokens/new) with the following permissions:

- `repo:status`
- `repo_deployment`
- `public_repo`

Make sure it has no expiration and that you give it a meaningful name so future you doesn't accidentally delete it, e.g. `github-actions-chat-a8c-com`.

Once you have the access token, you must enter it in the [*Action secrets* section](https://github.com/Automattic/chat.a8c.com/settings/secrets/actions) of the repository's Settings. Once in that page, proceed as follows:

1. Remove the `ACCESS_TOKEN` secret under *Repository secrets*
2. Click [Create a new Repository secret](https://github.com/Automattic/chat.a8c.com/settings/secrets/actions/new)
3. Use `ACCESS_TOKEN` as the secret's name
4. Generate a random password with your password manager or equivalent tool
5. Enter the generated password in the *Secret* field
6. Click *Add secret*

The newly generated `ACCESS_TOKEN` secret will from now on be used by all actions.
