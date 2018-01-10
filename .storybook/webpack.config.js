const applyStorybookDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config');
const { applyAngularCliConfig } = require('@quramy/storybook-angular-cli-helper');

module.exports = (baseConfig, env) =>
  applyAngularCliConfig(applyStorybookDefaultConfig(baseConfig, env));
