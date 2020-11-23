import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Page1, Page2, Page3 } from './pages';
import theme from '../theme';
import { Wrapper } from './styles';

export default function StoryWrapper() {
  const [storyPage, setStoryPage] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      {storyPage === 0 && (
        <Wrapper>
          <Page1 setStoryPage={setStoryPage} />{' '}
        </Wrapper>
      )}
      {storyPage === 1 && <Page2 setStoryPage={setStoryPage} />}
      {storyPage === 2 && <Page3 setStoryPage={setStoryPage} />}
    </ThemeProvider>
  );
}
