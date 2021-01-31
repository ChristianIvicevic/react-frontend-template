# React Frontend Template <!-- omit in toc -->

This template has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and was extended with some opinionated additions and changes.

- [Template usage](#template-usage)
- [Customizations on top of Create React App](#customizations-on-top-of-create-react-app)
  - [`.nvmrc` file](#nvmrc-file)
  - [Yarn 2 package manager](#yarn-2-package-manager)
  - [Enforcing strict code style](#enforcing-strict-code-style)
  - [Default JSX factory](#default-jsx-factory)
  - [React polyfills](#react-polyfills)
  - [Styled Components](#styled-components)
  - [Github workflow](#github-workflow)
  - [Absolute paths](#absolute-paths)
  - [VS Code settings](#vs-code-settings)
    - [Editor settings](#editor-settings)
    - [Extensions](#extensions)
    - [Launch settings](#launch-settings)
- [Learn more](#learn-more)

## Template usage

You can use this template directly via Github by clicking on the **Use this template** button which allows you to create a new repository based on this template.
Alternatively you can clone this repository and delete the corresponding `.git` and initialize a new repository in the same folder to start.

In either case delete the [`renovate.json`](./renovate.json) file which is used to keep the template repository up-to-date using [renovate](https://github.com/renovatebot/renovate).
Alternatively replace its contents with your own credentials and configuration if you use renovate yourself.

## Customizations on top of Create React App

The following is a list of all the customizations made on top of Create React App.
They are in no particular order.

### `.nvmrc` file

There exists an automatically updated `.nvmrc` file that pins the current LTS version of Node.js this application should be compiled with.
It is recommended to use the [Node Version Manager](https://github.com/nvm-sh/nvm) in combination with the supplied `.nvmrc` file.

### Yarn 2 package manager

Instead of using `npm` as the default package manager this project relies on `yarn`, specifically yarn 2.
The latest version of yarn 2 is checked into the repository and will be automatically picked up by classic yarn.
However the latter has to be installed using `npm i -g yarn` first if you haven't done that yet.

No Plug-and-Play features have been enabled and a classic `node_modules` folder will be available for compatibility reasons.

Furthermore it is highly recommended to install all dependencies using `yarn add --exact <package-name>` to pin the versions right away.
On top that you don't need to distinguish between `dependencies` and `devDependencies` since this application is bundled automatically and doesn't take that separation into consideration at all.

### Enforcing strict code style

To enforce a consistent code style this project has been configured to make use of `eslint-config-airbnb-typescript`.
This package includes sensible rules and settings for working with React and Typescript.
Together with eslint, editorconfig and prettier all files should be automatically formatted according to the strict rules defined in that package.
If you want to change any rule to fit your own code style you can change the settings in the [`.eslintrc`](./.eslintrc) file.

### Default JSX factory

In the [`tsconfig.json`](./tsconfig.json) file the default JSX factory has been set to `react-jsx`.
This means that you no longer need to import `React` globally into any file at all anymore.

### React polyfills

For older browsers such as Internet Explorer 11 commonly used polyfills are autmatically supplied via the additional `react-app-polyfill` package.

### Styled Components

Styling via raw CSS or SCSS files has been dropped from the bootstrapped project and replaced with [Styled Components](https://styled-components.com/), a popular CSS-in-JS library.
In addition `styled-normalize` as the `normlize.css` wrapper for use with Styled Components has been added to the project.
For more details please refer to the [`src/ui/components/app/app.tsx`](./src/ui/components/app/app.tsx) file as well as [`src/ui/styles/global-styles.ts`](./src/ui/styles/global-styles.ts).

### Github workflow

You will find an initial [`.github/workflows/tests.yml`](./.github/workflows/tests.yml) workflow file that will run for changes on the `main` branch.
This workflow runs the linter and tests and tries to build the application.
Should you be interested in gathering details on code coverage you can uncomment the Code Coverage step that uploads code coverage details to [Codecov](https://about.codecov.io/).
Enabling the step is especially useful for third-party contributions since the respective bot will comment on pull requests and summarize code coverage changes.

### Absolute paths

In the [`tsconfig.json`](./tsconfig.json) file the `baseUrl` property has been enabled to allow importing files using their absolute path:

```ts
// Instead of this
import { FancyMixin } from '../../../styles/mixins';
// You can write this
import { FancyMixin } from 'ui/styles/mixins';
```

This feature makes it easy to reference files rather than counting how many `..` parts belong to a specific path and refactoring and moving files no longer incurs updating that many paths across the application.

Currently the "root" folder in `src` is named `ui` which must be used as a prefix to reference local imports.
You can rename that folder according to your needs, but you have to update the prefix in the supplied sample file imports.
It is recommended to pick a prefix that won't cause too many collisions with already existing packages or at least no collisions with packages you are using as direct dependencies.

### VS Code settings

#### Editor settings

Via the [`.vscode/settings.json`](./.vscode/settings.json) some sensible settings have been enabled:

* Automatically formatting files and fixing linter issues when saving a file.
* Organizing imports when saving a file.
* Hiding certain files and folders, including the `node_modules` folder itself from the file explorer.
* Certain Typescript-related settings for consistent code style.

#### Extensions

This template projects includes a custom [`.vscode/extensions.json`](./.vscode/extensions.json) file that prompts you to install recommended extensions in VS Code for use with the template.
Recommended extensions are the following:

* **Debugger for Chrome** - Mandatory plugin to debug React application from within VS Code.
* **DotENV** - Support for syntax highlighting in `.env` files.
* **EditorConfig for VS Code** - Enable support for the code style declared with the `.editorconfig` file.
* **ESLint VSCode Plugin** - Run eslint within VSCode to lint your code.
* **Path Intellisense** - Better path autocompletion outside of import statements, such as paths to images, stylesheets etc.
* **Prettier - Code formatter** - Format code using prettier and our supplied settings in the `.prettierrc` file rather than relying on the VS Code formatter.
* **Visual Studio IntelliCode** - AI-assisted code completion suggestions.
* **vscode-styled-components** - Code completion and highlighting of CSS code within styled component template literals.

#### Launch settings

In the [`.vscode/launch.json`](./.vscode/launch.json) file a default debugging task for running Chrome has been declared.
You can start debugging the application using this task.

## Learn more

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
