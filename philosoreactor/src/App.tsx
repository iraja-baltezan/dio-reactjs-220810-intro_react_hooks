import React, { ReactEventHandler, useEffect, useRef, useState } from 'react';
import { globalCss, styled } from '@stitches/react';

import imgShootingStars from './assets/img/shooting-stars.webp';
import imgPhilosoraptor from './assets/img/philosoraptor.webp';
import audioSwoosh from './assets/audio/swoosh.mp3';

import QuoteText from './components/QuoteText';
import QuoteButton from './components/QuoteButton';

import IQuote from './data/IQuote';
import getQuoteLocal from './data/offlineData';

import { getQuote } from './services/quotesService';

const audio = new Audio(audioSwoosh);

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
  '@media (min-width:768px)': {
    padding: '2rem',
    maxWidth: '960px',
    margin: '0 auto',
  },
})

const ImgStyled = styled('img', {
  position: 'absolute',
  bottom: 16, left: 16,
  maxHeight: '40vh',
  maxWidth: '80vw',
  zIndex: 1,
})

const IconButtonStyled = styled('a', {
  position: 'absolute',
  bottom: '2rem',
  right: '2rem',
  display: 'inline-flex',
  backgroundColor: '#fff',
  borderRadius: '50%',
  textDecoration: 'none',
  lineHeight: '1em',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow:'0 0 16px #fff',
  transition: 'all 200ms',
  '&:hover':{
    transform: 'scale(1.2)',
  }
})

function App() {
  globalStyles();

  const isMounted = useRef(true);

  const [quote, setQuote] = useState<IQuote | undefined>(undefined);

  const handleOnUpdate = async (event?: React.MouseEvent) => {
    try {
      const quoteRemote: IQuote = await getQuote(quote?.id as number | undefined);
      if (!isMounted) return;
      setQuote({ ...quoteRemote });
    }
    catch (err: any) {
      console.log('Using local quotes database.');
      console.log('Error requesting quote from remote database.');
      const quoteLocal = getQuoteLocal(quote?.id as number | undefined);
      setQuote({ ...quoteLocal });
    }
    try {
      if (event) await audio.play();
    }
    catch (err) { console.log('Audio autoplay blocked.') }
  }

  useEffect(() => {
    handleOnUpdate();
    return () => {
      isMounted.current = false;
    }
  }, []);

  return (
    <>
      <AppStyled>
        <QuoteText speaker={quote?.speaker} src={quote?.src}>{quote?.quote}</QuoteText>

        <QuoteButton onUpdate={handleOnUpdate}>
          One more useless
          <br />
          thought please...
        </QuoteButton>
      </AppStyled>
      <IconButtonStyled href="https://github.com/iraja-baltezan/dio-reactjs-220810-intro_react_hooks" target="_blank" title="github.com/iraja-baltezan">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
      </IconButtonStyled>
      <ImgStyled src={imgPhilosoraptor} alt="The philosoraptor." />
    </>
  );
}

export default App;
