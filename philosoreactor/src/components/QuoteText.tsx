import React from 'react';
import { styled } from '@stitches/react';


const QuoteTextStyled = styled('p', {
    padding: '1rem',
    color: '#fff',
    fontSize: '1.2rem',
    maxWidth: '100%',
    // maxHeight: 'calc(100vh - 320px)',
    overflow: 'auto',
    textAlign: 'right',
    textShadow: '#2b0d5a 0px 4px 8px, #190834 0px 4px 16px',
    '& .speaker': {
        display: 'block',
        fontStyle: 'italic',
        fontWeight: 'normal',
        opacity:0.75
    },
    '@media (min-width:425px)':{
        fontSize:'1.5rem',
    },
    '@media (min-width:768px)':{
        fontSize:'2rem',
        maxWidth: '960px',
    },
})


export default function QuoteText({ children, speaker = '' }: { children: React.ReactNode, speaker?: string }) {
    return (
        <QuoteTextStyled  role='paragraph'>
            {children}
            {speaker && (
                <span className='speaker'>
                    {speaker}
                </span>
            )}
        </QuoteTextStyled>
    )
};