import { DocsContainer } from '@storybook/addon-docs'
import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import { ComponentProps } from 'react'
import { useDarkMode } from 'storybook-dark-mode'
import '../src/styles/styles.css'
const preview: Preview = {
  parameters: {
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
      stylePreview: true,
    },
    options: {
      showToolbar: true,
    },
  },
}

export default preview
