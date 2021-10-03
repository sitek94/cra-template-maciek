# cra-template-maciek

This is a [Create React App TypeScript template](https://github.com/facebook/create-react-app) with some additional tweaks.

To use this template, add `--template maciek` when creating a new app.

For example:

```sh
npx create-react-app my-app --template maciek

# or

yarn create react-app my-app --template maciek
```

## My tweaks 

- removed all the boilerplate (logo, css, links, etc.). Everything you get is:
```jsx
function App() {
  return (
    <div>
      <h1>Simple TS Template</h1>
    </div>
  );
}
```
- already installed prettier, added simple config, and npm script to format all files
- ESLint config is extracted from `package.json` to a `.eslintrc.js`. In addition to defaults, it sorts your imports using `simple-import-sort` plugin
- `npm run sort` - will sort your `package.json` and remove redundant `eslintConfig` property since it's now in a separate file. Check `scripts/sort-package-json.js` to see how it's done

## More information

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
