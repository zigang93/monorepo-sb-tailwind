import type { StorybookConfig } from '@storybook/nextjs'
import { dirname, join } from 'node:path'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('storybook-dark-mode'),
  ],
  core: {
    disableTelemetry: true,
  },
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {
      strictMode: true,
      // enable it when storybook is getting bigger, trade off is each story need to load
      builder: {
        // lazyCompilation: true,
        // fsCache: true,
        // useSWC: true, // Enables SWC support
      },
    },
  },
}
module.exports = config
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
