module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          // Absolute imports and other imports such as `@/foo`.
          // Anything that does not start with a dot.
          [
            '^(api)(/.*|$)',
            '^(constants)(/.*|$)',
            '^(utils)(/.*|$)',
            '^(hooks)(/.*|$)',
            '^(assets)(/.*|$)',
            '^(components)(/.*|$)',
            '^(test)(/.*|$)',
            '^[^.]',
          ],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
        ],
      },
    ],
  },
};
