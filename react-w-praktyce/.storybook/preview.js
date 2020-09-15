import React from 'react';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
));
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
