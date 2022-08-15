import React, { PropsWithChildren } from 'react';
import { styled } from '@stitches/react';

const ButtonStyled = styled('button', {
    position: 'relative',
    fontSize: '1.5rem',
    fontFamily: 'inherit',
    color: '#152a60',
    backgroundColor: 'yellow',
    border: '1px dotted yellow',
    borderRadius: '2em',
    boxShadow: '#FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0), -4px -6px 22px 1px rgba(249,255,23,1)',
    lineHeight: '1.1em',
    padding: '0.3em 0.6em 0.5em',
    textShadow: 'white 0 0 8px',
    textTransform:'uppercase',
    fontWeight:'bold',
    transform:'rotateZ(-15deg)',
    transition: 'all 200ms',
    '&:after, &:before': {
        content: '',
        display: 'block',
        position: 'absolute',
        border: '6px dotted yellow',
        borderRadius: '2em',
        top: '-7px',
        left: '-6px',
        width: '100%',
        height: '100%',
    },
    '&:after': {
        content: '',
        display: 'block',
        position: 'absolute',
        border: '8px dotted yellow',
        borderRadius: '2em',
        top: '-9px',
        left: '-8px',
        width: '100%',
        height: '100%',
    },
    '&:active': {
        transform: 'scale(0.95) rotateZ(-15deg)',
    }
})

type TQuoteButtonProps = PropsWithChildren & {
    onUpdate?: () => void
}
const QuoteButton: React.FC<TQuoteButtonProps> = ({ children = 'One mor paradox please...', onUpdate, ...props }: TQuoteButtonProps) => {

    return (
        <ButtonStyled onClick={onUpdate}>
            {children}
        </ButtonStyled>
    )
}
export default QuoteButton;
