# Example usage of [webpack-context-vuex-hmr](https://github.com/presidenten/webpack-context-vuex-hmr)

## Introduction
This project is based upon the [Vue-cli webpack template](https://github.com/vuejs-templates/webpack), that has been modified to show how to get automatic `HMR` running with `Vuex` when organizing by using [Vuex modules](https://vuex.vuejs.org/en/modules.html).
This is done by using the [webpack-context-hmr](https://github.com/presidenten/webpack-context-vuex-hmr) webpack plugin.

For the Webpack 1 example, check the [webpack1 branch](https://github.com/presidenten/webpack-context-vuex-hmr-demo/tree/webpack1)

## Usage

- Clone this repo
- Install dependencies by running `yarn`or `npm install`
- Start the dev server
- Open devtools window with javascript console
- Modify any of the source files to trigger the `HMR`
  The interesting files are:
    - ./src/components/example-component/example-store.js
    - ./src/components/example-component/helper-substore.js
- Try for example to change the mutation in the `helper-substore.js`
- Changes to `initialState` requires manual browser refresh
- Have fun!

# License
MIT
