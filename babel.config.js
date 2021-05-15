module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        // To include polyfills, some readings https://github.com/babel/babel/issues/10008
        // The future might be: https://github.com/babel/babel-polyfills/blob/main/docs/migration.md
        useBuiltIns: 'usage',
        corejs: {
          version: '3.11'
        }
      }
    ]
  ],
  plugins: [
    '@babel/plugin-transform-runtime'
  ]
}