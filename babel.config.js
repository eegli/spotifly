module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: '17.3.0' },
      },
    ],
    ['@babel/preset-typescript'],
  ],
};
