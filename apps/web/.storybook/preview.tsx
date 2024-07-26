import { DocsContainer } from '@storybook/addon-docs'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import { ComponentProps } from 'react'
import { useDarkMode } from 'storybook-dark-mode'



import '../src/styles/globals.css'



const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: ({
        children,
        context,
      }: ComponentProps<typeof DocsContainer>) => {
        const isDark = useDarkMode()
        return (
          <DocsContainer
            context={context}
            theme={isDark ? themes.dark : themes.light}
          >
            {children}
          </DocsContainer>
        )
      },
      source: {
        state: 'open',
        excludeDecorators: true,
      },
    },
    darkMode: {
      current: 'light',
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
      // Override the default light theme
      light: { ...themes.light, appBg: 'white' },
    },
    options: {
      showToolbar: true,
    },
    
  },
  decorators: [
    (Story) => {
      return (
        <Story />
      )
    },
  ],
}

export default preview
