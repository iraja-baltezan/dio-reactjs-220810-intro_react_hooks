import React from 'react';
import { styled } from '@stitches/react';


const QuoteTextStyled = styled('p', {
    padding: '1rem',
    color: '#fff',
    fontSize: '1.5rem',
    maxWidth: '100%',
    // maxHeight: 'calc(100vh - 320px)',
    overflow: 'auto',
    textAlign: 'right',
    textShadow: 'rgb(25 8 52 / 78%) 0px 4px 16px',
    '& .author': {
        display: 'block',
        fontStyle: 'italic',
        fontWeight: 'normal',
        opacity:0.75
    }
})


export default function QuoteText({ children, author = '' }: { children: React.ReactNode, author?: string }) {
    return (
        <QuoteTextStyled  role='paragraph'>
            {children}
            {author && (
                <span className='author'>
                    {author}
                </span>
            )}
        </QuoteTextStyled>
    )
};