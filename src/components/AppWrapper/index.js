import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Title, SubTitle } from './styles';
import theme from '../theme';

export default function AppWrapper() {
  const [type, setType] = React.useState({ string: '' });

  return (
    <ThemeProvider theme={theme}>
      <Title>Tim Simms</Title>
      <SubTitle>A Story About How I Don't Like Tests</SubTitle>
    </ThemeProvider>
  );
}
