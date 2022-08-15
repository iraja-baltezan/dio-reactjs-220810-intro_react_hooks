import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const response = { speaker: 'The Speaker', quote: 'The test quote.'}

const server = setupServer(
  rest.get(
    process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(response));
    }
  )
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// test('renders the app', () => {
//   render(<App />);
//   const text = screen.getByText(/Olá mundo!/i);
//   expect(text).toBeInTheDocument();
// });

test('app has a button', () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  expect(buttonEl).toBeInTheDocument();
})

test('app has a image', () => {
  render(<App />);
  const imageEl = screen.getByRole('img');
  expect(imageEl).toBeInTheDocument();
})

test('app has a text paragraph', () => {
  render(<App />);
  const textEl = screen.getByRole('paragraph');
  expect(textEl).toBeInTheDocument();
})

test('calls api on button click and update its text', async () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl)
  const quoteEl = await screen.findByText(response.quote);
  expect(quoteEl).toBeInTheDocument();
})