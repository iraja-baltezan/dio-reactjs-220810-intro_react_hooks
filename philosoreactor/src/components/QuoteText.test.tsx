import { render, screen } from '@testing-library/react';
import QuoteText from './QuoteText';

const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button', () => {
    render(
        <QuoteText speaker={speaker}>
            {quote}
        </QuoteText>
    );
    const quoteTextEl = screen.getByText(quote);
    const speakerEl = screen.getByText(speaker);
    expect(quoteTextEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
})
