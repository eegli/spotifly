module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: '14' },
      },
    ],
    ['@babel/preset-typescript'],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
