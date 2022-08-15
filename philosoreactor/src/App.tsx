import React, { ReactEventHandler, useEffect, useRef, useState } from 'react';
import { globalCss, styled } from '@stitches/react';

import imgShootingStars from './assets/img/shooting-stars.webp';
import imgPhilosoraptor from './assets/img/philosoraptor.webp';
import audioSwoosh from './assets/audio/swoosh.mp3';

import QuoteText from './components/QuoteText';
import QuoteButton from './components/QuoteButton';

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
})

const ImgStyled = styled('img', {
  position: 'absolute',
  bottom: 16, left: 16,
  maxHeight: '40vh',
  maxWidth: '80vw',
  zIndex: 1,
})

type TQuote = {
  quote?: string,
  speaker?: string,
}

function App() {
  globalStyles();

  const isMounted = useRef(true);

  const [quote, setQuote] = useState('Loading quote...');
  const [speaker, setSpeaker] = useState('Loading speaker...');

  const handleOnUpdate = async (event?: React.MouseEvent) => {
    try {
      const quote: TQuote = await getQuote();
      if (!isMounted) return;
      try {
        if (event) await audio.play();
      }
      catch (err) { console.log('Audio autoplay blocked.') }
      if (!quote) return;
      if (quote.quote) setQuote(quote.quote);
      if (quote.speaker) setSpeaker(quote.speaker);

    }
    catch (err: any) {
      console.log('Erro: ', err);
    }
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
        <QuoteText speaker={speaker}>{quote}</QuoteText>

        <QuoteButton onUpdate={handleOnUpdate}>
          One more<br />paradox please...
        </QuoteButton>
      </AppStyled>
      <ImgStyled src={imgPhilosoraptor} alt="The philosoraptor." />
    </>
  );
}

export default App;
