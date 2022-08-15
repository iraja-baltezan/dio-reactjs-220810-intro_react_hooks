import React, { useState } from 'react';
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
  author?: string,
}

function App() {
  globalStyles();

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const handleOnUpdate = async () => {
    audio.play();
    try {
      const quote: TQuote = await getQuote();
      console.log(quote);
      if (quote && quote.quote) setQuote(quote.quote);
      if (quote && quote.author) setAuthor(quote.author);
    }
    catch (err: any){
      console.log('Erro: ', err);
    }
  }

  return (
    <>
      <AppStyled>
        {/* <QuoteText author='Quote text - author'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ante sem. Curabitur gravida pharetra nunc nec lacinia. Aenean risus diam, elementum in suscipit sit amet, tempus vitae arcu.
        </QuoteText> */}

        <QuoteText author={author}>{quote}</QuoteText>

        <QuoteButton onUpdate={handleOnUpdate}>
          One more<br />paradox please...
        </QuoteButton>
      </AppStyled>
      <ImgStyled src={imgPhilosoraptor} alt="The philosoraptor." />
    </>
  );
}

export default App;
