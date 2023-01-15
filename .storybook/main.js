module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5', // https://storybook.js.org/docs/react/builders/webpack#webpack-5
    options: {
      fsCache: true,
    },
    disableTelemetry: true,
  },
};
