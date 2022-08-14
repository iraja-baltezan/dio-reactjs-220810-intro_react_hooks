import { fireEvent, render, screen } from '@testing-library/react';
import QuoteButton from './QuoteButton';

test('renders a button', () => {
    render(
        <QuoteButton>
            Click here!
        </QuoteButton>
    );
    const quoteButtonEl = screen.getByRole('button');
    expect(quoteButtonEl).toBeInTheDocument();
});

test('calls a callback when button is pressed', () => {
    const callback = jest.fn();
    render(
        <QuoteButton onUpdate={callback}>
            Click here!
        </QuoteButton>
    );
    const quoteButtonEl = screen.getByRole('button');
    fireEvent.click(quoteButtonEl);

    expect(callback).toHaveBeenCalledTimes(1);
})