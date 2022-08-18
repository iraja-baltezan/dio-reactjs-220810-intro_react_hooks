import React from 'react';
import { styled } from '@stitches/react';


const QuoteTextStyled = styled('p', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '1rem',
    color: '#fff',
    fontSize: '1.2rem',
    maxWidth: '100%',
    // maxHeight: 'calc(100vh - 320px)',
    overflow: 'auto',
    textAlign: 'right',
    textShadow: '#2b0d5a 0px 4px 8px, #190834 0px 4px 16px',
    '@media (min-width:425px)': {
        fontSize: '1.5rem',
    },
    '@media (min-width:768px)': {
        fontSize: '2rem',
        maxWidth: '960px',
    },
})

const SpeakerStyled = styled('a', {
    color: 'inherit',
    padding: '1rem',
    textAlign: 'right',
    textShadow: '#2b0d5a 0px 4px 8px, #190834 0px 4px 16px',
    display: 'block',
    fontStyle: 'italic',
    fontWeight: 'normal',
    opacity: 0.75,
    cursor: 'pointer',
    transition: 'all 200ms',
    transformOrigin: 'center',
    '&:visited, &:link, &:hover, &:active, &:focus':{
        color: 'inherit',
    },
    '&:hover, &:active, &:focus': {
        opacity:1,
    },
    '&:active':{
        transform: 'translateY(4px) scale(0.95)'
    }

})

function Speaker({ children, src }: { children?: React.ReactNode, src?: string }) {
    return (
        <SpeakerStyled target="_blank" href={src}>
            {children}
        </SpeakerStyled>
    )
}

export default function QuoteText(
    { children, speaker = '', src }:
        {
            children: React.ReactNode,
            speaker?: string,
            src?: string
        }
) {
    return (
        <QuoteTextStyled role='paragraph'>
            {children}
            {speaker && (
                <Speaker src={!src ? undefined : src}>
                    {speaker}
                </Speaker>
            )}
        </QuoteTextStyled>
    )
};