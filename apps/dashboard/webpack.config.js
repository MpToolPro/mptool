const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

/**
 * We use the NX_TSCONFIG_PATH environment variable when using the @nx/angular:webpack-browser
 * builder as it will generate a temporary tsconfig file which contains any required remappings of
 * shared libraries.
 * A remapping will occur when a library is buildable, as webpack needs to know the location of the
 * built files for the buildable library.
 * This NX_TSCONFIG_PATH environment variable is set by the @nx/angular:webpack-browser and it contains
 * the location of the generated temporary tsconfig file.
 */
const tsConfigPath =
  process.env.NX_TSCONFIG_PATH ??
  path.join(__dirname, '../../tsconfig.base.json');

const workspaceRootPath = path.join(__dirname, '../../');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  tsConfigPath,
  [
    /* mapped paths to share */
    '@mptool/shared/core',
  ],
  workspaceRootPath
);

module.exports = {
  output: {
    uniqueName: 'dashboard',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        todo: 'https://inspiring-starship-933c53.netlify.app/remoteEntry.js',
        login: 'https://ephemeral-tarsier-23f392.netlify.app/remoteEntry.js',
        wildberries:
          'https://astonishing-sopapillas-caaf47.netlify.app/remoteEntry.js',
        avito: 'https://lustrous-creponne-a9c4e4.netlify.app/remoteEntry.js',
        ozon: 'https://lucent-unicorn-8a7733.netlify.app/remoteEntry.js',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': {
          singleton: true,
          strictVersion: true,
          requiredVersion: '16.2.6',
        },
        '@angular/common/http': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        ...sharedMappings.getDescriptors(),
      },
      library: {
        type: 'module',
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
