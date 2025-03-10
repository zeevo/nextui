import React from 'react';
const { CssBaseline } = require('@nextui-org/react');
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import { createTheme, NextUIProvider } from "@nextui-org/react"

const lightTheme = createTheme({
  type: 'light'
})

const darkTheme = createTheme({
  type: 'dark'
})
export const decorators = [
  (Story) => (
    <NextUIProvider theme={useDarkMode() ? darkTheme : lightTheme}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexWrap: 'wrap',
          width: '100%',
          height: '100%'
        }}
      >
        <CssBaseline />
        <Story />
      </div>
    </NextUIProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    stylePreview: true,
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'white' }
  },
  backgrounds: {
    default: 'light'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
