module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { node: '14.19' },
      },
    ],
    ['@babel/preset-typescript'],
  ],
};
