# Nexus Web Components

[![pipeline status](https://git.ey-intuitive.com/ashtonharris/stencil-demo-with-playbook/badges/develop/pipeline.svg)](https://git.ey-intuitive.com/ashtonharris/stencil-demo-with-playbook/commits/develop)
[![coverage report](https://git.ey-intuitive.com/ashtonharris/stencil-demo-with-playbook/badges/develop/coverage.svg)](https://git.ey-intuitive.com/ashtonharris/stencil-demo-with-playbook/commits/develop)

> Stencil Library with angular and react outputs documented in the playbook. This is an example architecture of how this
> can work.

## Table of Contents

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Available NPM Scripts](#available-scripts)
- [Generate Library Items](#generate-library-items)
- [Environments](#environments)
- [Publishing](#publishing)

## Requirements

- `node` >= v16.13.0
- `yarn` >= v1.22.19

## Getting Started

### Install:

```
$ yarn
```

### Start

```
$ yarn start
```

## Available Scripts

| Command                         | Description                                                                       |
| ------------------------------- | --------------------------------------------------------------------------------- |
| `yarn build`                    | Build everything (you must run this to see angular and react updates in playbook) |
| `yarn build:angular`            | Build the angular example application                                             |
| `yarn build:playbook`           | Build the playbook documentation static site                                      |
| `yarn build:playbook:icons`     | Build the playbook icon documentation                                             |
| `yarn build:react`              | Build the react example application                                               |
| `yarn build:stencil:angular`    | Build the angular wrapper library of the stencil component library                |
| `yarn build:stencil:react`      | Build the react wrapper library of the stencil component library                  |
| `yarn build:stencil`            | Build the stencil library                                                         |
| `yarn clean`                    | Remove all node modules, lock files, and compiled/ignored code                    |
| `yarn lint:angular`             | Lint the angular example application                                              |
| `yarn lint:js`                  | Lint all `.js` files                                                              |
| `yarn lint:scss`                | Lint all `.scss` files                                                            |
| `yarn lint:stencil`             | Lint the stencil library                                                          |
| `yarn lint`                     | Lint everything                                                                   |
| `yarn serve:playbook`           | Start the playbook server                                                         |
| `yarn start`                    | Start and watch everything                                                        |
| `yarn start:angular`            | Start and watch the angular example application                                   |
| `yarn start:react`              | Start and watch the react example application                                     |
| `yarn start:stencil`            | Start and watch the stencil library                                               |
| `yarn test`                     | Test the stencil library                                                          |
| `yarn test:watch`               | Test the stencil library in watch mode                                            |
| `sb:docs`                       | Build storybook docs                                                              |
| `start:sb:stencil`              | Start storybook for javascript on port 6002                                       |
| `start:sb:react`                | Start storybook for react on port 6003                                            |
| `start:sb:angular`              | Start storybook for angular on port 6004                                          |
| `start:sb`                      | Start storybook                                                                   |
| `build:sb`                      | Build storybook                                                                   |

## Generate Library Items

In order to generate a new stencil component:

```
$ nexus --cmd generate --type component --name <component-name>
```

To generate an example for a component:

```
$ nexus --cmd generate --type example --name <component-name> --exampleName <example-name> --playbookDir <playbook-group-name>
```

After Generating a new component or an example remember to run a new build:

```
$ yarn build
```

## Environments

| Environment | Url                                        | Branch  |
| ----------- | ------------------------------------------ | ------- |
| DEV         | https://apsdfsoom5wap06.azurewebsites.net/ | develop |
| QA          | TBD                                        | qa      |
| PROD        | TBD                                        | master  |

## Publishing

### Update package versions

1. Document changes in the `CHANGELOG.md`:

- Under the `## Unreleased` heading there are multiple sections
- List all changes under the appropriate heading with the format found in the example below:

```
### Features

### Bug Fixes
- **Angular** Fix angular issue ([195104](https://fso-to.visualstudio.com/Nexus%20for%20Banking/_workitems/edit/195104/))
- **React** Fix react issue ([195100](https://fso-to.visualstudio.com/Nexus%20for%20Banking/_workitems/edit/195100/))

### DEPRECATIONS

### BREAKING CHANGES

```

2. To change the version number in all package.json files, in the root directory, run the following command, replacing
   <update_type> with one of the semantic versioning release types (patch, major, or minor)

```
$ node bin/release <update_type>
```

3. Build all libraries and docs:

```
$ yarn build
```

4. Clean up the `CHANGELOG.md` release notes:

- Remove any empty notes (such as Features, DEPRECATIONS and BREAKING CHANGES from the below example)

```
### Features

### Bug Fixes
- **Angular** Fix angular issue ([195104](https://fso-to.visualstudio.com/Nexus%20for%20Banking/_workitems/edit/195104/))
- **React** Fix react issue ([195100](https://fso-to.visualstudio.com/Nexus%20for%20Banking/_workitems/edit/195100/))

### DEPRECATIONS

### BREAKING CHANGES

```

5. Commit and push the changes:

```
git add .
git commit -m "Release <version>"
git push
```

6. Publish the release by merging the changes into the `master` branch
