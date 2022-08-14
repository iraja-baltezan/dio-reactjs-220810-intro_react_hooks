import React from 'react';
import { globalCss, styled } from '@stitches/react';

import imgShootingStars from './assets/img/shooting-stars.webp';
import imgPhilosoraptor from './assets/img/philosoraptor.webp';
import QuoteText from './components/QuoteText';
import QuoteButton from './components/QuoteButton';

const globalStyles = globalCss({
  'body': {
    backgroundImage: `url(${imgShootingStars})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    overflowY: 'auto',
    minHeight: '100vh',
    maxWidth: '100vw',
  }
})

const AppStyled = styled('div', {
  position: 'relative',
  padding: '1rem 1rem 250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: '2rem',
  zIndex: 999,
})

const ImgStyled = styled('img', {
  position: 'absolute',
  bottom: 16, left: 16,
  maxHeight: '40vh',
  maxWidth: '80vw',
  zIndex: 1,
})


function App() {
  globalStyles();

  return (
    <>
      <AppStyled>
        <QuoteText author='Quote text - author'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ante sem. Curabitur gravida pharetra nunc nec lacinia. Aenean risus diam, elementum in suscipit sit amet, tempus vitae arcu.
        </QuoteText>

        <QuoteButton>
          One more<br/>paradox please...
        </QuoteButton>
      </AppStyled>
      <ImgStyled src={imgPhilosoraptor} alt="The philosoraptor." />
    </>
  );
}

export default App;
